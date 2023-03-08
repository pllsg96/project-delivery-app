import React from 'react';
import PropTypes from 'prop-types';

const ONE = 1;

function OrderTable({ products }) {
  return (
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
        { products.map((product, index) => (
          <tr key={ index }>
            <td>{ +(index) + ONE }</td>
            <td>{ product.name }</td>
            <td>{ product.quantity }</td>
            <td>
              R$
              {' '}
              { (Number(product.price).toFixed(2)).replace('.', ',') }
            </td>
            <td>
              R$
              {' '}
              { (Number(product.quantity * product.price).toFixed(2)).replace('.', ',') }
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
  })).isRequired,
};

export default OrderTable;
