import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Navbar from '../components/NavBar';
import OrdersContainer from '../components/ClientOrdersComponents/OrdersContainer';

function ClientOrdersPage() {
  const { data, isLoading } = useQuery(
    ['order'],
    async () => axios.get('http://localhost:3001/sales'),
  );

  return (
    <div>
      <Navbar />
      { isLoading ? <h1>Loading...</h1> : <OrdersContainer orders={ data.data } />}
    </div>
  );
}

export default ClientOrdersPage;
