const ComponentRegistrant = (container) => (key) => (target) => {
  if( (process.env.NODE_ENV === 'production') ) return target;
  const record = container.regist(key, target);
  return (...args) => (container.get('Container')().get(record))(...args);
};

export default ComponentRegistrant;