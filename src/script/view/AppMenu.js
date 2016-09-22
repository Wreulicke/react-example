import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import { ClassComponent } from '../module/container/Application';

class AppMenu extends React.Component {
  render() {
    const resetStyle = {
      'marginLeft': '0px',
      padding: '0px'
    };
    const linkStyle = {
      'paddingLeft': '16px'
    };
    return (
      <div>
        <MenuItem innerDivStyle={ resetStyle }>
        <Link
              style={ linkStyle }
              className="drawer"
              to="/"> Home
        </Link>
        </MenuItem>
        <MenuItem innerDivStyle={ resetStyle }>
        <Link
              style={ linkStyle }
              className="drawer"
              to="/about"> About
        </Link>
        </MenuItem>
        <MenuItem innerDivStyle={ resetStyle }>
        <Link
              style={ linkStyle }
              className="drawer"
              to="/topics"> Topics
        </Link>
        </MenuItem>
      </div>
      );
  }
}
export default ClassComponent()(AppMenu);