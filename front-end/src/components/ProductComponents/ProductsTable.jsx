import React from 'react';
// import PropTypes from 'prop-types';
import productMock from '../../mocks/product.mock';
import ProductQuantity from './ProductQuantity';

function ProductsTable() {
  return (
    <ul>
      {productMock.map((product) => (
        <li key={ product.name }>
          <p data-testid={ `customer_products__element-card-title-${product.id}` }>
            {product.name}
          </p>
          <p data-testid={ `customer_products__element-card-price-${product.id}` }>
            R$
            {' '}
            { product.price.toFixed(2) }
          </p>
          <img
            src={ `customer_products__img-card-bg-image-${product.id}` }
            alt="imagem"
          />
          <ProductQuantity product={ product } />
        </li>))}
    </ul>
  );
}

ProductsTable.propTypes = {

};

export default ProductsTable;
