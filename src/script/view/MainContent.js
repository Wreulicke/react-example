import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Match, Miss } from 'react-router';

import Todo from './Todo';
import Markdown from './Markdown';
import Login from './Login';

import If from './If';
import { ClassComponent } from '../module/container/Application';

class MainContent extends React.Component {
  constructor({store, appState}) {
    super();
    this.state = {
      isLogin: appState.isLogin
    };
    this.appState = appState;
    store.on('change:isLogin', (isLogin) => {
      this.setState({
        isLogin
      });
    });
  }
  render() {
    return (
      <div>
        <AppBar
                iconElementLeft={ <span/> }
                title="sample application" />
        <Login appState={ this.appState } />
        <If show={ !this.state.isLogin }>
          not login
        </If>
        <If show={ this.state.isLogin }>
          <Match
                 pattern="/"
                 exactly={ true }
                 render={ () => <div>
                                  Home
                                </div> } />
          <Match
                 pattern="/about"
                 component={ Markdown } />
          <Miss component={ Todo } />
        </If>
      </div>);
  }
}

export default ClassComponent(MainContent);