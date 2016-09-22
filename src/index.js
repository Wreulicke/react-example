import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Application from './script/app.js';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Application/>, document.getElementById('test'));
});
