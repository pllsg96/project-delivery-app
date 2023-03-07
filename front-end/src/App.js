import React, { useEffect } from 'react';
import { useLocation, useHistory, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import ClientOrdersPage from './pages/ClientOrdersPage';
import DeliveryAppProvider from './context/DeliveryAppProvider';
import OrderPage from './pages/OrderPage';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname === '/') {
      history.push('/login');
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
