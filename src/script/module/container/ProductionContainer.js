class ProductionContainer {
  constructor(...observers) {
    this.observers = observers;
  }
  regist(key, target, ...deps) {
    this.publish(`regist`, key, target);
    return target.bind(null, ...deps);
  }
  get(key) {
    return key;
  }
  publish(event, ...data) {
    if (this.observers != null) this.observers.forEach((o) => o.emit(event, ...data));
  }
}

export default ProductionContainer;