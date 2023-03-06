import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DeliveryAppContext from '../../context/DeliveryAppContext';

function CheckoutAddressForm() {
  const { cart, setCart } = useContext(DeliveryAppContext);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [seller] = useState({ id: 2, name: 'Fulana Pereira' });
  const history = useHistory();

  const submitOrder = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    const order = {
      userId: user.id,
      sellerId: seller.id,
      deliveryAddress,
      deliveryNumber,
      products: cart,
    };
    axios.post('http://localhost:3001/checkout', order)
      .then((response) => {
        const { id } = response.data;
        setCart([]);
        history.push(`/orders/${id}`);
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
        >
          Finalizar Pedido
        </button>
      </form>
    </>
  );
}

export default CheckoutAddressForm;
