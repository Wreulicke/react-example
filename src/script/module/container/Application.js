import Container from './Container';
import ProductionContainer from './ProductionContainer';
import ComponentFactory from './ComponentFactory';

const container = (process.env.NODE_ENV === 'production') ? new ProductionContainer() : new Container();
const Component = (key, ...deps) => {
  const _container = (process.env.NODE_ENV === 'production') ? container : container.get('Container')();
  return ComponentFactory(_container)(key, ...deps);
};
const ClassComponent = (...deps) => (target) => {
  return Component(target.name, ...deps)(target);
};
container.regist('Container', () => container);
container.regist('Component', Component);
export default Component;
export { container, Component, ClassComponent };