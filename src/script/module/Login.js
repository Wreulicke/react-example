import React from 'react';
import { Link } from 'react-router';
const Login=({store}) => {
  return <button onClick={()=>store.isLogin=true} >login</button>;
};

export default Login; 