const ComponentFactory = (container) => (key) => (target) => {
  const record = container.regist(key, target);
  return (...args) => new (container.get(record))(...args);
};

export default ComponentFactory;