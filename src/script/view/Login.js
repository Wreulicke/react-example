import React from 'react';
import { ClassComponent } from '../module/container/Application';
const Login = ({store}) => {
  return <button onClick={ () => store.isLogin = true }>
           login
         </button>;
};

export default ClassComponent(Login);