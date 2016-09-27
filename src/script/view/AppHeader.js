import React from 'react';

import Paper from 'material-ui/Paper';

import FlatButton from 'material-ui/FlatButton';
import { ClassComponent } from '../module/container/Application';
import {ListItem} from 'material-ui/List';
class AppHeader extends React.Component {
  constructor({store, appState}) {
    super();
    this.appState = appState;
    store.on('change:name', (name) => this.setState({
      name
    }));
  }
  render() {
    return (<header className="header">
              <Paper className="header">
                <div className="header" style={{justifyContent:'flex-end',display:'flex'}}>
                  <ListItem primaryText={ this.appState.name || 'no name' } disabled={true}/>
                  <FlatButton label="Logout"
                              primary={ true }
                              onTouchTap={ () => {
                                             this.appState.isLogin = false;
                                             this.appState.name = '';
                                           } } />
                </div>
              </Paper>
            </header>);
  }
}
export default ClassComponent(AppHeader);