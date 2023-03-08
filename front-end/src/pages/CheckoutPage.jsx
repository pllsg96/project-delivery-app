import React, { useEffect, useContext } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import NavBar from '../components/NavBar';
import CheckoutItemsTable from '../components/CheckoutComponents/CheckoutItemsTable';
import CheckoutAddressForm from '../components/CheckoutComponents/CheckoutAddressForm';

function CheckoutPage() {
  const { setCart, setPrice, setCartQuantity } = useContext(DeliveryAppContext);

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartStorage) {
      const filtered = cartStorage.filter((item) => item.quantity !== 0);
      setCart(filtered);
      setPrice(cartStorage.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0));
      setCartQuantity(cartStorage.reduce((acc, curr) => acc + curr.quantity, 0));
    }
  }, [setCart, setPrice, setCartQuantity]);

  return (
    <div>
      <NavBar />
      <CheckoutItemsTable />
      <CheckoutAddressForm />
    </div>
  );
}

export default CheckoutPage;
