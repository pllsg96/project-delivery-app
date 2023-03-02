import React, { useContext } from 'react';
import DeliveryAppContext from '../../context/DeliveryAppContext';

function CheckoutButton() {
  const { price, cartQuantity } = useContext(DeliveryAppContext);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      disabled={ price === 0 }
    >
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        { cartQuantity > 0 && cartQuantity }
        {' '}
        Ver Carrinho: R$
        {' '}
        { Number(price).toFixed(2) }
      </p>
    </button>
  );
}

export default CheckoutButton;
