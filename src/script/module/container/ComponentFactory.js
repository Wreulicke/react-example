const ComponentFactory = (container) => (key, ...deps) => (target) => {
  container.regist(key, target, ...deps);
  return key;
};

export default ComponentFactory;