import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import isEmailValid from '../../utils/isEmailValid';

const SIX = 6;

function LoginButton(props) {
  const { email, password, setError, history } = props;

  const handleSubmit = async () => {
    setError('');
    if (!isEmailValid(email)) setError('Email inválido!');
    else if (password.length < SIX) setError('Senha inválida!');
    else {
      try {
        const { data } = await axios.post('http://localhost:3001/login', { email, password });
        localStorage.setItem('user', JSON.stringify(data));
        history.push('/customer/products');
      } catch (error) {
        setError('Email ou senha inválidos!');
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
        data-testid="common_login__button-register"
        onClick={ () => {
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
