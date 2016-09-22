class DevelopmentContainer {
  constructor(...observers) {
    // SHOULD BE WeakMap ?
    this.reference = {};
    this.observers = observers;
  }
  regist(key, target) {
    if (this.reference[key] != null)
      throw new Error(`already regist:${key}`);
    this.reference[key] = target;
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
    return this.reference[key];
  }
  publish(event, ...data) {
    if (this.observers != null) this.observers.forEach((o) => o.emit(event, ...data));
  }
}

export default DevelopmentContainer;