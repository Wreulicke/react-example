import React from 'react';
import { ClassComponent } from '../module/container/Application';

const If = ({show, children}) => {
  const style = {
    display: show ? '' : 'none'
  };
  return (<div style={ style }>
            { children }
          </div>);
};

export default ClassComponent()(If);