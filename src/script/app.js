import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SplitPane from 'react-split-pane';
import { BrowserRouter } from 'react-router';

import AppMenu from './view/AppMenu';
import MainContent from './view/MainContent';
import AppHeader from './view/AppHeader';

import {Component} from './module/container/Application';

export default Component('App',AppMenu, MainContent, AppHeader)(
  (Menu, Content, Header) => 
    (<BrowserRouter>
      <MuiThemeProvider muiTheme={ getMuiTheme() }>
        <div>
          <Header />
          <SplitPane defaultSize="120px">
            <Menu/>
            <Content />
          </SplitPane>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>)
);