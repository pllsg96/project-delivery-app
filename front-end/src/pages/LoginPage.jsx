import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginRequisition from '../services/loginAPI';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const validateEmail = (emailToValidate) => {
    const EMAIL_REGEX = /\S+@\S+\.\S+/;
    const isValidate = EMAIL_REGEX.test(emailToValidate);
    return isValidate;
  };

  const validatePassword = (passwordToValidate) => {
    const MIN_LENGTH_PASSWORD = 6;
    const isValidate = passwordToValidate.length >= MIN_LENGTH_PASSWORD;
    return isValidate;
  };

  const handleLogin = async () => {
    const response = await loginRequisition(email, password);
    if (response === 'Invalid fields') {
      setError(true);
    } else {
      localStorage.setItem('user', JSON.stringify(response));
      history.push('/customer/products');
    }
  };

  const handleRegister = () => {
    history.push('/register');
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Login
          <input
            type="email"
            data-testid="common_login__input-email"
            id="email"
            value={ email }
            onChange={ handleEmail }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="common_login__input-password"
            id="password"
            value={ password }
            onChange={ handlePassword }
          />
        </label>

        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !validateEmail(email) || !validatePassword(password) }
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ handleRegister }
        >
          Cadastrar
        </button>
      </form>
      {error && (
        <p
          data-testid="common_login__element-invalid-email"
        >
          Email e/ou Password Inválidos
        </p>
      )}
    </div>
  );
}

export default LoginPage;
