import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../../context/DeliveryAppContext';

function ProductQuantity(props) {
  const { product } = props;
  const { cart, addItem, removeItem, changeItemByInput } = useContext(DeliveryAppContext);

  const productInCart = cart.find((cartItem) => cartItem.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  return (
    <div>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        onClick={ () => {
          if (quantity !== 0) removeItem(product);
        } }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        onChange={ ({ target }) => changeItemByInput(product, target.value) }
        data-testid={ `customer_products__input-card-quantity-${product.id} ` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        onClick={ () => addItem(product) }
      >
        +
      </button>
    </div>
  );
}

ProductQuantity.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductQuantity;
