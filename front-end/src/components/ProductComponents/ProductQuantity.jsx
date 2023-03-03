import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../../context/DeliveryAppContext';

function ProductQuantity(props) {
  const { product } = props;
  const { cart, addItem, removeItem, changeItemByInput } = useContext(DeliveryAppContext);

  let quantity = 0;
  if (cart) {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      quantity = productInCart.quantity;
    }
  }

  return (
    <div>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        onClick={ () => {
          removeItem(product);
        } }
      >
        -
      </button>
      <input
        type="text"
        placeholder={ quantity }
        value={ quantity }
        onChange={ ({ target }) => {
          quantity = target.value;
          changeItemByInput(product, quantity);
        } }
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
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
  }).isRequired,
};

export default ProductQuantity;
