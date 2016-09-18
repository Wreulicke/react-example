import React from 'react';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router';
class AppMenu extends React.Component {
  constructor() {
    super();
  }

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
export default AppMenu;