import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import DeliveryAppProvider from './context/DeliveryAppProvider';
import './App.css';

function App() {
  return (
    <DeliveryAppProvider>
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/customer/products" component={ ProductsPage } />
      </Switch>
    </DeliveryAppProvider>
  );
}

export default App;
