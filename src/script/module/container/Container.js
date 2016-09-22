import DevelopmentContainer from './DevelopmentContainer';
import ComponentRegistrant from './ComponentRegistrant';

const ContainerFactory = function() {
  if( (process.env.NODE_ENV === 'production') ) {
    return;
  } else {
    return new DevelopmentContainer();
  }
};
const Container = function() {
  const container = ContainerFactory();
  const Component = (key) => (process.env.NODE_ENV === 'production')? target => target :ComponentRegistrant(container)(key);
  const FunctionComponent = (target) => (process.env.NODE_ENV === 'production')? target : Component(target.name)(target);
  const ClassComponent = (target) => (process.env.NODE_ENV === 'production')? target : Component(target.name)((...args) => new target(...args));
  return {
    container,
    Component,
    ClassComponent,
    FunctionComponent
  };
};
export default Container;