import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DATA_TESTID_ID = 'customer_orders__element-order-id-';
const DATA_TESTID_STATUS = 'customer_orders__element-delivery-status-';
const DATA_TESTID_PRICE = 'customer_orders__element-card-price-';
const DATA_TESTID_DATE = 'customer_orders__element-order-date-';

function dateFormater(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-br');
}

function OrdersCard({ order }) {
  return (
    <Link
      to={ `/customer/orders/${order.id}` }
      style={ { textDecoration: 'none' } }
    >
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
        R$
        {' '}
        { (Number(order.totalPrice).toFixed(2)).replace('.', ',') }
      </p>
      <p
        data-testid={ DATA_TESTID_DATE + order.id }
      >
        { dateFormater(order.saleDate) }
      </p>
    </Link>
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
