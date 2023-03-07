import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import Navbar from '../components/NavBar';
import OrderTable from '../components/OrderPage/OrderTable';
import OrderHeader from '../components/OrderPage/OrderHeader';

function OrderPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(
    ['order', id],
    async () => axios.get(`http://localhost:3001/sales/${id}`),
  );

  return (
    <div>
      <Navbar />
      <h1>Order Page</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <OrderHeader
            order={ data.data }
          />
          <OrderTable />
        </div>
      )}
    </div>
  );
}

export default OrderPage;
