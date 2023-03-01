import React from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {
  const { setEmail, setPassword } = props;

  return (
    <>
      <input
        type="email"
        id="email"
        name="email"
        data-testid="common_login__input-email"
        placeholder="Email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        id="password"
        name="password"
        data-testid="common_login__input-password"
        placeholder="Senha"
        onChange={ ({ target }) => setPassword(target.value) }
      />
    </>
  );
}

LoginForm.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginForm;
