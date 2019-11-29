import React from 'react';
import LoginForm from './LoginForm'
import { Wrapper } from './Login.style';

const Login = ({...props }) => (
  <Wrapper hideAppBar>
    <LoginForm />
  </Wrapper>
)

export default Login;
