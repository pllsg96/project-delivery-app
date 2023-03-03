import React, { useEffect } from 'react';
import { useLocation, useHistory, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import DeliveryAppProvider from './context/DeliveryAppProvider';
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
        <Route exact path="/customer/checkout" component={ ProductsPage } />
      </Switch>
    </DeliveryAppProvider>
  );
}

export default App;
