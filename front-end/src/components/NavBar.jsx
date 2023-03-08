import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <nav>
      <ul
        style={ {
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none',
          padding: '10px',
        } }
      >
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
          style={ { padding: '10px' } }
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
          style={ { padding: '10px' } }
        >
          Meus pedidos
        </Link>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          style={ { padding: '10px' } }
        >
          {user.name}
        </p>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => localStorage.clear() }
          style={ { padding: '10px' } }
        >
          Sair
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
