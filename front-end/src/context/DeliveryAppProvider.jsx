import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from './DeliveryAppContext';

function DeliveryAppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const setNewCart = (newCart) => {
    const filtered = newCart.filter((item) => item.quantity !== 0);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(filtered));
    setCart(filtered);
    const newQuantity = filtered.reduce((acc, item) => acc + item.quantity, 0);
    setCartQuantity(newQuantity);
  };

  const addItem = useCallback((item) => {
    const hasItem = cart.some((cartItem) => cartItem.id === item.id);
    if (!hasItem) {
      const itemWithQuantity = { ...item, quantity: 1 };
      const newCart = [...cart, itemWithQuantity];
      setCart(newCart);
      const newQuantity = newCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
      setCartQuantity(newQuantity);
      localStorage.setItem('cart', JSON.stringify(newCart));
      let newPrice = 0;
      newCart.forEach((cartItem) => {
        newPrice += cartItem.price * cartItem.quantity;
      });
      setPrice(newPrice.toFixed(2));
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: +(cartItem.quantity) + 1 };
        }
        return cartItem;
      });
      setCart(newCart);
      const newQuantity = newCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
      setCartQuantity(newQuantity);
      localStorage.setItem('cart', JSON.stringify(newCart));
      let newPrice = 0;
      newCart.forEach((cartItem) => {
        newPrice += cartItem.price * cartItem.quantity;
      });
      setPrice(newPrice.toFixed(2));
    }
  }, [cart]);

  const removeItem = useCallback((item) => {
    const product = cart.find((cartItem) => cartItem.id === item.id);
    if (product.quantity === 1) {
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(newCart);
      const newQuantity = newCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
      setCartQuantity(newQuantity);
      localStorage.setItem('cart', JSON.stringify(newCart));
      let newPrice = 0;
      newCart.forEach((cartItem) => {
        newPrice += cartItem.price * cartItem.quantity;
      });
      setPrice(newPrice.toFixed(2));
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: +(cartItem.quantity) - 1 };
        }
        return cartItem;
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      const newQuantity = newCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
      setCartQuantity(newQuantity);
      let newPrice = 0;
      newCart.forEach((cartItem) => {
        newPrice += cartItem.price * cartItem.quantity;
      });
      setPrice(newPrice.toFixed(2));
    }
  }, [cart]);

  const changeItemByInput = useCallback((item, quantity) => {
    const product = cart.find((cartItem) => cartItem.id === item.id);
    if (!product) {
      const newCart = [...cart, { ...item, quantity: +quantity }];
      setNewCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      let newPrice = 0;
      newCart.forEach((cartItem) => {
        newPrice += cartItem.price * cartItem.quantity;
      });
      setPrice(newPrice.toFixed(2));
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: +quantity };
        }
        return cartItem;
      });
      setNewCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      let newPrice = 0;
      newCart.forEach((cartItem) => {
        newPrice += cartItem.price * cartItem.quantity;
      });
      setPrice(newPrice.toFixed(2));
    }
  }, [cart]);

  const contextValue = useMemo(() => ({
    cart,
    setCart,
    price,
    setPrice,
    addItem,
    removeItem,
    changeItemByInput,
    cartQuantity,
    setCartQuantity,
  }), [cart, price, cartQuantity,
    setCart, setPrice, addItem, removeItem, changeItemByInput, setCartQuantity]);

  return (
    <DeliveryAppContext.Provider value={ contextValue }>
      {children}
    </DeliveryAppContext.Provider>
  );
}

DeliveryAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryAppProvider;
