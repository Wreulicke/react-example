class Container {
  constructor(...observers) {
    // SHOULD BE WeakMap ?
    this.reference = {};
    this.cache = {};
    this.observers = observers;
  }
  regist(key, target, ...deps) {
    if (this.reference[key] != null)
      throw new Error(`already regist:${key}`);
    this.reference[key] = {
      target,
      deps
    };
    this.publish(`regist:${key}`, target);
    this.publish(`regist`, key, target);
  }
  get(key) {
    if (this.cache[key] != null) return this.cache[key];
    const {target, deps} = this.reference[key];
    const impls = deps.map(::this.get);
    const instance = this.cache[key] = new target(...impls);
    this.publish(`create:${key}`, instance, target);
    this.publish(`create`, key, instance, target);
    return instance;
  }
  publish(event, ...data) {
    if (this.observers != null) this.observers.forEach((o) => o.emit(event, ...data));
  }
}

export default Container;