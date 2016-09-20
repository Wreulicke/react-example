
import React from 'react';
const If = ({show, children}) => {
  const style = {
    display: show ? '' : 'none'
  };
  return (<div style={ style }>
            { children }
          </div>);
};
export default If;