import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <nav>
      <ul>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus pedidos
        </Link>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
        </Link>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
