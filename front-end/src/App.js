import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import DeliveryAppProvider from './context/DeliveryAppProvider';
import './App.css';

function App() {
  useEffect(() => {
    const location = window.location.href;
    if (location === 'http://localhost:3000/') {
      window.location.href = 'http://localhost:3000/login';
    }
  }, []);

  return (
    <DeliveryAppProvider>
      <Switch>
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/customer/products" component={ ProductsPage } />
      </Switch>
    </DeliveryAppProvider>
  );
}

export default App;
