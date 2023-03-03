import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import isEmailValid from '../../utils/isEmailValid';

const TWELVE = 12;
const SIX = 6;
const CONFLICT = 409;

function RegisterButton(props) {
  const { inputNameValue,
    inputEmailValue,
    inputPasswordValue,
    setError,
    history } = props;
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isEmailValid(inputEmailValue)
    && inputPasswordValue.length >= SIX
    && inputNameValue.length >= TWELVE) setDisabled(false);
    else setDisabled(true);
  }, [inputEmailValue, inputPasswordValue, inputNameValue]);

  const handleSubmit = async () => {
    setError('');
    if (!isEmailValid(inputEmailValue)) setError('Email inválido!');
    else if (inputPasswordValue.length < SIX) setError('Senha inválida!');
    else if (inputNameValue.length < TWELVE) setError('Nome inválido!');
    else {
      try {
        const { data } = await axios.post('http://localhost:3001/register', {
          name: inputNameValue,
          email: inputEmailValue,
          password: inputPasswordValue,
        });
        localStorage.setItem('user', JSON.stringify(data));
        history.push('/customer/products');
      } catch (error) {
        if (error.response.status === CONFLICT) setError('Email já cadastrado!');
        else setError('Erro no cadastro! Tente novamente!');
      }
    }
  };

  return (
    <button
      type="button"
      name="button-register"
      data-testid="common_register__button-register"
      disabled={ disabled }
      onClick={ () => { handleSubmit(); } }
    >
      Register
    </button>
  );
}

RegisterButton.propTypes = {
  inputNameValue: PropTypes.string.isRequired,
  inputEmailValue: PropTypes.string.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RegisterButton;
