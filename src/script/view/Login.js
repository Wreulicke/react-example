import React from 'react';
import { ClassComponent } from '../module/container/Application';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';
import handler from '../module/functions/handler';
import enter from '../module/functions/onEnter';

class Login extends React.Component {
  constructor({appState}) {
    super();
    this.state = {
      id: '',
      password: '',
    };
    this.appState = appState;
  }
  login() {
    // TODO login implementation
    const isLogin = (this.state.id != this.state.password);
    if (isLogin) {
      this.appState.name = this.state.id;
      this.state.id = '';
      this.state.password = '';
    }
    this.appState.isLogin = isLogin;
  }

  render() {
    const appState = this.appState;
    const actions = [
      <FlatButton
                  label="Login"
                  primary={ true }
                  onTouchTap={ ::this.login } />,
    ];
    return <Dialog
                   title="Please login with your account"
                   actions={ actions }
                   modal={ true }
                   open={ !appState.isLogin }>
             <div>
               <TextField
                          hintText="id"
                          defaultValue={ this.state.id }
                          onChange={ this::handler('id') } />
               <br />
               <TextField
                          hintText="password"
                          defaultValue={ this.state.password }
                          onChange={ this::handler('password') }
                          onKeyDown={ enter(::this.login) } />
             </div>
           </Dialog>;
  }
}

export default ClassComponent(Login);