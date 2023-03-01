import React from 'react';
import PropTypes from 'prop-types';

function RegisterForm(props) {
  const { setInputNameValue, setInputEmailValue, setInputPasswordValue } = props;

  return (
    <>
      <label htmlFor="input-name">
        Nome:
        {' '}
        <input
          type="text"
          name="input-name"
          data-testid="common_register__input-name"
          onChange={ ({ target }) => {
            setInputNameValue(() => target.value);
          } }
        />
      </label>
      <label htmlFor="input-email">
        Email:
        {' '}
        <input
          type="email"
          name="input-email"
          data-testid="common_register__input-email"
          onChange={ ({ target }) => {
            setInputEmailValue(() => target.value);
          } }
        />
      </label>
      <label htmlFor="input-password">
        Password:
        {' '}
        <input
          type="password"
          name="input-password"
          data-testid="common_register__input-password"
          onChange={ ({ target }) => {
            setInputPasswordValue(() => target.value);
          } }
        />
      </label>
    </>
  );
}

RegisterForm.propTypes = {
  setInputNameValue: PropTypes.func.isRequired,
  setInputEmailValue: PropTypes.func.isRequired,
  setInputPasswordValue: PropTypes.func.isRequired,
};

export default RegisterForm;
