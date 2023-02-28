/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from './DeliveryAppContext';

function DeliveryAppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const addItem = (item) => {
    const hasItem = cart.some((cartItem) => cartItem.id === item.id);
    if (!hasItem) {
      const itemWithQuantity = { ...item, quantity: 1 };
      setCart([...cart, itemWithQuantity]);
      localStorage.setItem('cart', JSON.stringify([...cart, itemWithQuantity]));
      setPrice((+(price) + +(itemWithQuantity.price)).toFixed(2));
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      setPrice((+(price) + +(item.price)).toFixed(2));
    }
  };

  const removeItem = (item) => {
    const product = cart.find((cartItem) => cartItem.id === item.id);
    if (product.quantity === 1) {
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      setPrice((+(price) - +(item.price)).toFixed(2));
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      setPrice((+(price) - +(item.price)).toFixed(2));
    }
  };

  const changeItemByInput = (item, quantity) => {
    const product = cart.find((cartItem) => cartItem.id === item.id);
    if (quantity === 0) {
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      setPrice(price - (product.price * product.quantity));
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity };
        }
        return cartItem;
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      setPrice(cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0));
    }
  };

  const contextValue = {
    cart,
    setCart,
    price,
    setPrice,
    addItem,
    removeItem,
    changeItemByInput,
  };

  return (
    <DeliveryAppContext.Provider value={ contextValue }>
      { children }
    </DeliveryAppContext.Provider>
  );
}

DeliveryAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryAppProvider;
