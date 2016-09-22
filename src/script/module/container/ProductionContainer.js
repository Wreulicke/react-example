class ProductionContainer {
  constructor(...observers) {
    this.observers = observers;
  }
  regist(key, target) {
    this.publish(`regist`, target);
    return target;
  }
  get(key) {
    if (key === 'Container') return () => this;
    return key;
  }
  publish(event, ...data) {
    if (this.observers != null) this.observers.forEach((o) => o.emit(event, ...data));
  }
}

export default ProductionContainer;