import DevelopmentContainer from './DevelopmentContainer';
import ProductionContainer from './ProductionContainer';
import ComponentFactory from './ComponentFactory';

const ContainerFactory = function() {
  if( (process.env.NODE_ENV === 'production') ) {
    return new ProductionContainer();
  } else {
    const container = new DevelopmentContainer();
    container.regist('Container', () => container);
    return container;
  }
};
const Container = function() {
  const container = ContainerFactory();
  const Component = (key) => ComponentFactory(container.get('Container')())(key);
  const ClassComponent = (target) => Component(target.name)(target);
  return {
    container,
    Component,
    ClassComponent
  };
};
export default Container;