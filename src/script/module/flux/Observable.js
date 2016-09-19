function Factory(state, dispatcher) {
  return new Proxy(state, {
    set(target, key, news) {
      const olds = target[key];
      target[key] = news;
      dispatcher.emit(`change:${key}`, news, olds);
      return true;
    },
    get(target, key) {
      return target[key];
    }
  });
}

// TODO multi dispatcher 
function Observable(state) {
  return Factory.bind(null, state);
}

export default Observable;