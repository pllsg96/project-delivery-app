import React from 'react';
import PropTypes from 'prop-types';

function OrderTable({ order }) {
  return (
    // < className="order-wrap">
    <table>
      <thead>
        <tr>
          <th>
            Item
          </th>
          <th>
            Descrição
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Valor unitário
          </th>
          <th>
            Sub-total
          </th>
        </tr>
      </thead>
      <tbody>
        {
          order.products.map((product, index) => (
            <tr key={ index }>
              <td>{index}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{Number(product.quantity * product.price).toFixed(2)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  order: PropTypes.shape({
    products: PropTypes.shape([{
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      urlImage: PropTypes.string,
    }]),
  }).isRequired,
};

export default OrderTable;
