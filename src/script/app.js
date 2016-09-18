import React from 'react';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import Paper from 'material-ui/Paper';
import { BrowserRouter, Match, Miss } from 'react-router';
import Todo from './module/Todo';
import AppMenu from './module/AppMenu';
import SplitPane from 'react-split-pane';
import Markdown from './module/markdown';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider muiTheme={ getMuiTheme() }>
      <div>
        <header className="header">
          <Paper className="header">
            <div className="header">
            </div>
          </Paper>
        </header>
        <SplitPane defaultSize="120px">
          <AppMenu/>
          <div>
            <AppBar
                    iconElementLeft={ <span/> }
                    title="hogehoge" />
            <Match
                   pattern="/about"
                   component={ Markdown } />
            <Miss
                  pattern="/"
                  component={ Todo } />
          </div>
        </SplitPane>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;