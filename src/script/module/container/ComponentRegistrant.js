const ComponentRegistrant = (container) => (key) => (target) => {
  const record = container.regist(key, target);
  return (...args) => (container.get('Container')().get(record))(...args);
};

export default ComponentRegistrant;