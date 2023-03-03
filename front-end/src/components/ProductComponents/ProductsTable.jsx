import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductQuantity from './ProductQuantity';

function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3001/products');
      response.data.forEach((product) => {
        product.quantity = 0;
        product.price = +(product.price);
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={ product.name }>
          <p data-testid={ `customer_products__element-card-title-${product.id}` }>
            {product.name}
          </p>
          <div
            style={ { display: 'flex', flexDirection: 'row' } }
          >
            <p>R$</p>
            <p data-testid={ `customer_products__element-card-price-${product.id}` }>
              { (product.price.toFixed(2)).replace('.', ',') }
            </p>
          </div>
          <img
            style={ { width: '100px' } }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            src={ product.urlImage }
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
