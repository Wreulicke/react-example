import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
import App from './script/app.js';
document.addEventListener('DOMContentLoaded',init);
class Test{
  static og=2;
}
function init() {
  ReactDOM.render(<App />,document.getElementById('test'));
}