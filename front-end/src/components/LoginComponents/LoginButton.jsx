import React from 'react';
import PropTypes from 'prop-types';
import isEmailValid from '../../utils/isEmailValid';

const SIX = 6;

function LoginButton(props) {
  const { email, password, setError } = props;

  const handleSubmit = () => {
    if (!isEmailValid(email)) setError('Email inválido!');
    else if (password.length < SIX) setError('Senha inválida!');
    else {
      try {
        setError('');
        const token = 'dfsakjgfajkhsdgfkasdflkdwbhsfhasdkljf';
        localStorage.setItem('token', token);
      } catch (error) {
        setError('Email inválido!');
      }
    }
  };

  return (
    <>
      <button
        type="button"
        data-testid="common_login__button-login"
        onClick={ () => handleSubmit() }
      >
        Entrar
      </button>
      <button
        type="button"
        data-testid="common_register__element-invalid_register"
        onClick={ () => {
          const { history } = props;
          history.push('/register');
        } }
      >
        Registrar
      </button>
    </>
  );
}

LoginButton.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginButton;
