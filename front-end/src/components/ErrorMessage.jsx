import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage(props) {
  const { error, from } = props;

  return (
    <p
      data-testid={
        from === 'login'
          ? 'common_login__element-invalid-email'
          : 'common_register__element-invalid_register'
      }
    >
      { error }
    </p>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};

export default ErrorMessage;
