import React from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from './DeliveryAppContext';

function DeliveryAppProvider({ children }) {
  return (
    <DeliveryAppContext.Provider>
      { children }
    </DeliveryAppContext.Provider>
  );
}

DeliveryAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryAppProvider;
