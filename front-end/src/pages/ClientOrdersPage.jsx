import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar';
import OrdersContainer from '../components/ClientOrdersComponents/OrdersContainer';

function ClientOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/sales')
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      { loading ? <h1>Loading...</h1> : <OrdersContainer orders={ orders } />}
    </div>
  );
}

export default ClientOrdersPage;
