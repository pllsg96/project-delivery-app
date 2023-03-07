import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DeliveryAppContext from '../../context/DeliveryAppContext';

function CheckoutAddressForm() {
  const { cart, setCart } = useContext(DeliveryAppContext);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [seller] = useState({ id: 2, name: 'Fulana Pereira' });
  const history = useHistory();

  useEffect(() => {
    if (deliveryAddress.length === 0 || deliveryNumber.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [deliveryAddress, deliveryNumber]);

  const submitOrder = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const order = {
      userId: user.id,
      sellerId: seller.id,
      deliveryAddress,
      deliveryNumber,
      products: cart,
    };
    console.log(order);
    axios.post('http://localhost:3001/checkout', order, { headers:
      {
        authorization: user.token,
      },
    })
      .then((response) => {
        const { id } = response.data;
        setCart([]);
        history.push(`/customer/orders/${id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2>Detalhes de Endereço para entrega</h2>
      <form>
        <select
          data-testid="customer_checkout__select-seller"
          disabled
        >
          <option value="Fulana Pereira">Fulana Pereira</option>
        </select>
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          placeholder="Endereço"
          value={ deliveryAddress }
          onChange={ (event) => setDeliveryAddress(event.target.value) }
        />
        <input
          type="text"
          data-testid="customer_checkout__input-address-number"
          placeholder="Número"
          value={ deliveryNumber }
          onChange={ (event) => setDeliveryNumber(event.target.value) }
        />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ submitOrder }
          disabled={ isDisabled }
        >
          Finalizar Pedido
        </button>
      </form>
    </>
  );
}

export default CheckoutAddressForm;
