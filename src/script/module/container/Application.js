import Container from 'mockable-container';
const container = new Container();
const {Component, ClassComponent, } = container.getExportModule();
export default Component;
export { container, Component, ClassComponent };