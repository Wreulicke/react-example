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
    this.publish(`regist`, target);
    return key;
  }
  validateKey(key) {
    if (typeof key !== 'string') {
      throw new Error(`key must be string, found ${key}`);
    }
    if (key === '') {
      console.warn('key should not be empty');
    }
  }
  get(key) {
    const reference = this.reference[key];
    this.validateKey(key);
    if (this.cache[key] != null) return this.cache[key];
    if (reference == null) {
      throw new Error(`${key} is not defined`);
    }
    const {target, deps} = reference;
    const impls = deps.map(::this.get);
    const Component = target.bind(null, ...impls);
    this.cache[key] = Component;
    this.publish(`create:${key}`, Component, target);
    this.publish(`create`, key, Component, target);
    return Component;
  }
  publish(event, ...data) {
    if (this.observers != null) this.observers.forEach((o) => o.emit(event, ...data));
  }
}

export default Container;