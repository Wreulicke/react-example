import Container from './Container';
import ComponentFactory from './ComponentFactory';

const container=new Container();
container.regist('Container', () => container);
container.regist('Component',() => ComponentFactory(container.get('Container')));

export default container;