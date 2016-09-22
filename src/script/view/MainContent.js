import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Match, Miss } from 'react-router';

import Todo from './Todo';
import Markdown from './Markdown';
import Login from './Login';

import If from './If';
import Store from '../module/flux/Store';
import O from '../module/flux/Observable';

import { ClassComponent } from '../module/container/Application';

class MainContent extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isLogin: false
    };
    const state = O(this.state);
    const store = new Store();
    this.store = state(store);
    store.on('change:isLogin', (isLogin) => this.setState({
      isLogin
    }));
  }
  render() {
    return (
      <div>
        <AppBar
                iconElementLeft={ <span/> }
                title="sample application" />
        <Match
               exactly={ true }
               pattern="/"
               render={ () => <Login store={ this.store } /> } />
        <If show={ !this.state.isLogin }>
          not login
        </If>
        <If show={ this.state.isLogin }>
          <Match
                 pattern="/about"
                 component={ Markdown } />
          <Miss
                pattern="/"
                component={ Todo } />
        </If>
      </div>);
  }
}

export default ClassComponent(MainContent);