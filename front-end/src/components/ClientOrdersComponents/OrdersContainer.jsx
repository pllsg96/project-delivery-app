import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import OrdersCard from './OrdersCard';

function OrdersContainer({ orders }) {
  return useMemo(
    () => (
      <div>
        {orders.map((order) => (
          <OrdersCard key={ order.id } order={ order } />
        ))}
      </div>
    ),
    [orders],
  );
}

OrdersContainer.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      totalPrice: PropTypes.string.isRequired,
      saleDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OrdersContainer;
