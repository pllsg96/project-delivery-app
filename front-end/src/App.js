import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation, useHistory, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import ClientOrdersPage from './pages/ClientOrdersPage';
import DeliveryAppProvider from './context/DeliveryAppProvider';
import OrderPage from './pages/OrderPage';
import './App.css';

const PRODUCTS_ROUTE = '/customer/products';
const LOGIN_ROUTE = '/login';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  useQuery('', async () => {
    if (pathname === '/') {
      const local = JSON.parse(localStorage.getItem('user'));
      if (local) {
        const { token } = local;
        try {
          await axios.get('http://localhost:3001/profile', {
            headers: {
              Authorization: token,
            },
          });
          history.push(PRODUCTS_ROUTE);
        } catch (err) {
          history.push(LOGIN_ROUTE);
        }
      } else {
        history.push(LOGIN_ROUTE);
      }
    } else if (pathname === LOGIN_ROUTE) {
      const local = JSON.parse(localStorage.getItem('user'));
      if (local) {
        const { token } = local;
        try {
          await axios.get('http://localhost:3001/profile', {
            headers: {
              Authorization: token,
            },
          });
          history.push(PRODUCTS_ROUTE);
        } catch (err) {
          history.push(LOGIN_ROUTE);
        }
      }
    }
  });

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user'));
    if (!local && pathname === '/') {
      history.push('/login');
    } else if (local && pathname === '/') {
      history.push('/customer/products');
    }
  }, [pathname, history]);

  return (
    <DeliveryAppProvider>
      <Switch>
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/customer/products" component={ ProductsPage } />
        <Route exact path="/customer/checkout" component={ CheckoutPage } />
        <Route exact path="/customer/orders" component={ ClientOrdersPage } />
        <Route exact path="/customer/orders/:id" component={ OrderPage } />
      </Switch>
    </DeliveryAppProvider>
  );
}

export default App;
