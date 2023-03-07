import React from 'react';
import PropTypes from 'prop-types';

const DTID_ORDERID = 'customer_order_details__element-order-details-label-order-id';
const DTID_SELLERNAME = 'customer_order_details__element-order-details-label-seller-name';
const DTID_ORDERDATE = 'customer_order_details__element-order-details-label-order-date';
const DTID_STATUS = 'customer_order_details__element-order-details-label-delivery-status';
const DTID_CHECKBUTTON = 'customer_order_details__button-delivery-check';

function dateFormater(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-br');
}

const FOUR = 4;

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

function OrderHeader({ order }) {
  return (
    <div>
      <h2 data-testid="top-title">Detalhes de Pedido</h2>
      <p
        data-testid={ DTID_ORDERID }
      >
        Pedido:
        {' '}
        #
        { padWithLeadingZeros(order.sale.id, FOUR) }
      </p>
      <p
        data-testid={ DTID_SELLERNAME }
      >
        P. Vend:
        {' '}
        Fulana Pereira
      </p>
      <p
        data-testid={ DTID_ORDERDATE }
      >
        { dateFormater(order.sale.saleDate) }
      </p>
      <p
        data-testid={ DTID_STATUS }
      >
        { order.sale.status }
      </p>
      <button
        type="button"
        data-testid={ DTID_CHECKBUTTON }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

OrderHeader.propTypes = {
  order: PropTypes.shape({
    sale: PropTypes.shape({
      id: PropTypes.number,
      saleDate: PropTypes.string,
      status: PropTypes.string,
    }),
  }).isRequired,
};

export default OrderHeader;
