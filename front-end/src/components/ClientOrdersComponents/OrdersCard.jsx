import React from 'react';
import PropTypes from 'prop-types';

const DATA_TESTID_ID = 'customer_orders__element-order-id-';
const DATA_TESTID_STATUS = 'customer_orders__element-delivery-status-';
const DATA_TESTID_PRICE = 'customer_orders__element-card-price-';
const DATA_TESTID_DATE = 'customer_orders__element-order-date-';

function OrdersCard({ order }) {
  return (
    <div>
      <p
        data-testid={ DATA_TESTID_ID + order.id }
      >
        { order.id }
      </p>
      <p
        data-testid={ DATA_TESTID_STATUS + order.id }
      >
        { order.status }
      </p>
      <p
        data-testid={ DATA_TESTID_PRICE + order.id }
      >
        { order.totalPrice }
      </p>
      <p
        data-testid={ DATA_TESTID_DATE + order.id }
      >
        { order.saleDate }
      </p>
    </div>
  );
}

OrdersCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrdersCard;
