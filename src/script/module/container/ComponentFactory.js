const ComponentFactory = (container) => (key, ...deps) => (target) => {
  return container.regist(key, target, ...deps);
};

export default ComponentFactory;