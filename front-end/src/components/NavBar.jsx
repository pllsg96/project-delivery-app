import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <nav>
      <ul>
        <li data-testid="customer_products__element-navbar-link-products">
          Produtos
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </li>
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
