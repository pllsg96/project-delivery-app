import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import OrdersContainer from '../components/ClientOrdersComponents/OrdersContainer';
// import axios from 'axios';
import ordersMock from '../mocks/orders.mock';

function ClientOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // axios
    //   .get('http://localhost:3001/api/orders')
    //   .then((res) => {
    //     setOrders(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setOrders(ordersMock);
  }, []);

  return (
    <div>
      <Navbar />
      <OrdersContainer orders={ orders } />
    </div>
  );
}

export default ClientOrdersPage;
