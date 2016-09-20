import Container from './Container';
import ComponentFactory from './ComponentFactory';

const container=new Container();
container.regist('Component',() => ComponentFactory(container));

export default container;