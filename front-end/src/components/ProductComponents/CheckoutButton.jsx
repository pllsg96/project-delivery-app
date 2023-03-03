import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DeliveryAppContext from '../../context/DeliveryAppContext';

function CheckoutButton() {
  const history = useHistory();
  const { price, cartQuantity } = useContext(DeliveryAppContext);

  return (
    <button
      type="button"
      onClick={ () => history.push('/customer/checkout') }
      data-testid="customer_products__button-cart"
      disabled={ price === 0 }
    >
      <p>
        { cartQuantity > 0 && cartQuantity }
        {' '}
        Ver Carrinho: R$
        {' '}
      </p>
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        { (Number(price).toFixed(2)).replace('.', ',') }
      </p>
    </button>
  );
}

export default CheckoutButton;
