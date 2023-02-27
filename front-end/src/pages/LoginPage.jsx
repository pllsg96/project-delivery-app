import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../components/ErrorMessage';
import LoginButton from '../components/LoginComponents/LoginButton';
import LoginForm from '../components/LoginComponents/LoginForm';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { history } = props;

  return (
    <form>
      <LoginForm setEmail={ setEmail } setPassword={ setPassword } />
      <LoginButton
        email={ email }
        password={ password }
        setError={ setError }
        history={ history }
      />
      { error.length > 0 && <ErrorMessage error={ error } from="login" /> }
    </form>
  );
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginPage;
