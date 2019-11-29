import React , { useState } from 'react';
import { withRouter } from 'react-router';
import {
  Wrapper,
  Title,
  Hint,
  Subtitle,
  InputWrapper,
  InfoWrapper,
  LoginButton,
} from './LoginForm.style';
import { routes } from '../../../config/router';
import FormInput from './FormInput';

const LoginForm = ({history, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Wrapper>
      <InfoWrapper>
        <Title>
          {`your\nart\nmuseum`}
        </Title>
        <Subtitle>
          {`151 3rd St\nSan Francisco, CA94103`}
        </Subtitle>
      </InfoWrapper>
      <InputWrapper>
        <FormInput
          name="email"
          type="email"
          placeholder="Email address"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <Hint justify="flex-end">
          Forgot your password?
        </Hint>
      </InputWrapper>
      <LoginButton onClick={() => history.push(routes.EXHIBITIONS.url)}>
        Log In
      </LoginButton>
      <Hint>
        Don't have an account?
      </Hint>
    </Wrapper>
  )
}

export default withRouter(LoginForm);
