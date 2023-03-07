import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import Navbar from '../components/NavBar';
import OrderTable from '../components/OrderComponents/OrderTable';
import OrderHeader from '../components/OrderComponents/OrderHeader';
import Loading from '../components/Loading';

function OrderPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(
    ['order', id],
    async () => axios.get(`http://localhost:3001/sales/${id}`),
  );

  console.log(data);

  return (
    <div>
      <Navbar />
      <h1>Order Page</h1>
      {isLoading ? (
        <Loading />
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
