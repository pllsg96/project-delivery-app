import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import isEmailValid from '../../utils/isEmailValid';

const MIN_LENGTH_PASSWORD = 6;

function LoginButton(props) {
  const [disabled, setDisabled] = useState(true);
  const { email, password, setError, history } = props;

  useEffect(() => {
    if (isEmailValid(email) && password.length >= MIN_LENGTH_PASSWORD) setDisabled(false);
    else setDisabled(true);
  }, [email, password]);

  const handleSubmit = async () => {
    setError('');
    if (!isEmailValid(email)) setError('Email inválido!');
    else if (password.length < MIN_LENGTH_PASSWORD) setError('Senha inválida!');
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
        disabled={ disabled }
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
