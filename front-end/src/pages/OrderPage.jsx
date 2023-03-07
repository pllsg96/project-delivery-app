import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/NavBar';

function OrderPage() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  useEffect(() => {
    axios
      .get(`http://localhost:3001/sales/${id}`)
      .then((res) => {
        setOrder(res.data);
        console.log(res.data);
        console.log(order);
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
      <h1>Order Page</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <p>a</p>
      )}
    </div>
  );
}

export default OrderPage;
