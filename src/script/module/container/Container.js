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
    if(typeof key!== 'string'){
      throw new Error(`key is not string, found ${key}`);
    }
    if (this.cache[key] != null) return this.cache[key];
    if(this.reference[key]==null){
      throw new Error(`${key} is not defined`);
    }
    const {target, deps} = this.reference[key];
    const impls = deps.map(::this.get);
    const Component = this.cache[key] = target.bind(null, ...impls);
    this.publish(`create:${key}`, Component, target);
    this.publish(`create`, key, Component, target);
    return Component;
  }
  publish(event, ...data) {
    if (this.observers != null) this.observers.forEach((o) => o.emit(event, ...data));
  }
}

export default Container;