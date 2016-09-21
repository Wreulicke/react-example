import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import App from './script/app.js';
import {container} from './script/module/container/Application';
const Application=container.get(App);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Application/>, document.getElementById('test'));
});
