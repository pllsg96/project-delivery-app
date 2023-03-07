import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/NavBar';
import Order from '../components/OrderPage/Order';

function OrderPage() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/sales/${id}`)
      .then((res) => {
        console.log(res.data);
        setOrder([res.data]);
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
        <Order
          order={ order[0] }
        />
      )}
    </div>
  );
}

export default OrderPage;
