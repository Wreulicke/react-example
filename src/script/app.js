import React from 'react';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';
import { BrowserRouter } from 'react-router';
import AppMenu from './module/AppMenu';
import SplitPane from 'react-split-pane';
import MainContent from './module/MainContent';

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
          <MainContent />
        </SplitPane>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;