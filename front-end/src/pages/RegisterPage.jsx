import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../components/ErrorMessage';
import RegisterForm from '../components/RegisterComponents/RegisterForm';
import RegisterButton from '../components/RegisterComponents/RegisterButton';

function RegisterPage(props) {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [error, setError] = useState('');

  const { history } = props;

  return (
    <div>
      <form action="">
        <RegisterForm
          setInputNameValue={ setInputNameValue }
          setInputEmailValue={ setInputEmailValue }
          setInputPasswordValue={ setInputPasswordValue }
        />
        <RegisterButton
          inputNameValue={ inputNameValue }
          inputEmailValue={ inputEmailValue }
          inputPasswordValue={ inputPasswordValue }
          setError={ setError }
          history={ history }
        />
        { error.length > 0 && <ErrorMessage error={ error } from="register" /> }
      </form>
    </div>
  );
}

RegisterPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RegisterPage;
