import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SplitPane from 'react-split-pane';
import { BrowserRouter } from 'react-router';

import AppMenu from './view/AppMenu';
import MainContent from './view/MainContent';
import AppHeader from './view/AppHeader';

import { ClassComponent } from './module/container/Application';
import Store from './module/flux/Store';
import O from './module/flux/Observable';
const state = {
  isLogin: false,
  name: ''
};
const store = new Store();
const OState = O(state)(store);
const App=() => (<BrowserRouter>
           <MuiThemeProvider muiTheme={ getMuiTheme() }>
             <div>
               <AppHeader
                          appState={ OState }
                          store={ store } />
               <SplitPane defaultSize="120px" style={{height:'80%'}}>
                 <AppMenu />
                 <MainContent
                              store={ store }
                              appState={ OState } />
               </SplitPane>
             </div>
           </MuiThemeProvider>
         </BrowserRouter>);
export default ClassComponent(App);