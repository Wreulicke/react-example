import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Match, Miss } from 'react-router';

import Todo from './Todo';
import Markdown from './Markdown';
import Login from './Login';

import If from './If';
import Store from '../module/flux/Store';
import O from '../module/flux/Observable';

import {ClassComponent} from '../module/container/Application';

class MainContent extends React.Component {
  constructor(If, Store, O, Login, Markdown, Todo, ...args) {
    super(...args);
    this.state = {
      isLogin: false
    };
    const state = O(this.state);
    const store = new Store();
    this.store = state(store);
    store.on('change:isLogin', (isLogin) => this.setState({isLogin}));
    this.component={
      If,
      Login,
      Markdown,
      Todo
    };
  }
  render() {
    const {If, Login, Markdown,Todo}=this.component;
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

export default ClassComponent('MainContent',If, Store, O, Login, Markdown, Todo)(MainContent);