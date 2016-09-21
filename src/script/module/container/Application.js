import Container from './Container';
import ComponentFactory from './ComponentFactory';

const container = new Container();
const Component=(key, ...deps) => ComponentFactory((container.get('Container'))())(key, ...deps);
const ClassComponent=(key, ...deps) => (target) => ComponentFactory((container.get('Container'))())(key, ...deps)((...args) =>new target(...args));

container.regist('Container', () => container);
container.regist('Component', Component);
export default Component;
export {
  container,
  Component,
  ClassComponent
};