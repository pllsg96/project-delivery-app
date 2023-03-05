import React, { useState } from 'react';
import fetchAPI from '../services/fetchAPI';
import statusCode from '../utils/statusCode';

const { useHistory } = require('react-router-dom');

function RegisterPage() {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [error] = useState(false);
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

  const validateName = (nameToValidate) => {
    const MIN_LENGTH_NAME = 12;
    const isValidate = nameToValidate.length >= MIN_LENGTH_NAME;
    return isValidate;
  };

  const handleEmail = ({ target }) => {
    setInputEmailValue(target.value);
  };

  const handlePassword = ({ target }) => {
    setInputPasswordValue(target.value);
  };

  const handleName = ({ target }) => {
    setInputNameValue(target.value);
  };

  const validateButton = () => {
    const isValidate = validateEmail(inputEmailValue)
      && validatePassword(inputPasswordValue)
      && validateName(inputNameValue);
    return isValidate;
  };

  const handleRegister = async () => {
    const response = await fetchAPI.registerRequisition(
      inputNameValue,
      inputEmailValue,
      inputPasswordValue,
    );
    const { status } = response;
    if (status === statusCode.CREATED) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/customer/products');
    }

    if (response.status === statusCode.CONFLICT) {
      setError(true);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="common_register__input-name"
            id="name"
            value={ inputNameValue }
            onChange={ handleName }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="common_register__input-email"
            id="email"
            value={ inputEmailValue }
            onChange={ handleEmail }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="common_register__input-password"
            id="password"
            value={ inputPasswordValue }
            onChange={ handlePassword }
          />
        </label>

        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ !validateButton() }
          onClick={ handleRegister }
        >
          Cadastrar
        </button>

        { error && (
          <p data-testid="common_register__element-invalid_register">
            email já existente
          </p>
        )}
      </form>
    </div>
  );
}

export default RegisterPage;
