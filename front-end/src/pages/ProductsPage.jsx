import React, { useEffect, useContext } from 'react';
import NavBar from '../components/NavBar';
import ProductsTable from '../components/ProductComponents/ProductsTable';
import DeliveryAppContext from '../context/DeliveryAppContext';
import CheckoutButton from '../components/ProductComponents/CheckoutButton';

function ProductsPage() {
  const { setCart, setPrice } = useContext(DeliveryAppContext);

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartStorage) {
      setCart(cartStorage);
      setPrice(cartStorage.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0));
    }
  }, []);

  return (
    <>
      <NavBar />
      <ProductsTable />
      <CheckoutButton />
    </>
  );
}

export default ProductsPage;
