import React from 'react';
import PropTypes from 'prop-types';
import isEmailValid from '../../utils/isEmailValid';

const TWELVE = 12;
const SIX = 6;

function RegisterButton(props) {
  const { inputNameValue,
    inputEmailValue,
    inputPasswordValue,
    setError,
    history } = props;

  const handleSubmit = () => {
    if (inputNameValue.length < TWELVE) setError('Nome inválido!');
    else if (!isEmailValid(inputEmailValue)) setError('Email inválido!');
    else if (inputPasswordValue.length < SIX) setError('Senha inválida!');
    else {
      try {
        setError('');
        const token = 'dfsakjgfajkhsdgfkasdflkdwbhsfhasdkljf';
        localStorage.setItem('token', token);
        console.log(token);
      } catch (err) {
        setError('Email inválido!');
        history.push('/');
      }
    }
  };

  return (
    <button
      type="button"
      name="button-register"
      data-testid="common_register__button-register"
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
