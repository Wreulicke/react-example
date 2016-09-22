const ComponentFactory = (container) => (key, ...deps) => (target) => {
  const record = container.regist(key, target, ...deps);
  return (...args) => new (container.get(record))(...args);
};

export default ComponentFactory;