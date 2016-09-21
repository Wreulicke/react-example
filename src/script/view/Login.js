import React from 'react';
import { Link } from 'react-router';
import Component from '../module/container/Application';
const Login = ({store}) => {
  return <button onClick={ () => store.isLogin = true }>
           login
         </button>;
};

export default Component('Login')(Login);