import React, { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import RegisterForm from '../components/RegisterComponents/RegisterForm';
import RegisterButton from '../components/RegisterComponents/RegisterButton';

function RegisterPage() {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [error, setError] = useState('');

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
        />
        { error.length > 0 && <ErrorMessage error={ error } from="register" /> }
      </form>
    </div>
  );
}

export default RegisterPage;
