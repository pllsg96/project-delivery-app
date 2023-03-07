import React from 'react';
import PropTypes from 'prop-types';

function Order({ order }) {
  return (
    <div className="order-wrap">
      <h2>
        {order.saleId}
      </h2>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    saleId: PropTypes.number,
    productId: PropTypes.number,
    quantity: PropTypes.number,
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      urlImage: PropTypes.string,
    }),
    sale: PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      totalPrice: PropTypes.string,
      deliveryAddress: PropTypes.string,
      deliveryNumber: PropTypes.string,
      saleDate: PropTypes.string,
      status: PropTypes.string,
    }),
  }).isRequired,
};

export default Order;
