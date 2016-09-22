import DevelopmentContainer from './DevelopmentContainer';
import ProductionContainer from './ProductionContainer';
import ComponentRegistrant from './ComponentRegistrant';

const ContainerFactory = function() {
  if( (process.env.NODE_ENV === 'production') ) {
    return new ProductionContainer();
  } else {
    return new DevelopmentContainer();
  }
};
const Container = function() {
  const container = ContainerFactory();
  const Component = (key) => ComponentRegistrant(container)(key);
  const FunctionComponent = (target) => Component(target.name)(target);
  const ClassComponent = (target) => Component(target.name)((...args) => new target(...args));
  return {
    container,
    Component,
    ClassComponent,
    FunctionComponent
  };
};
export default Container;