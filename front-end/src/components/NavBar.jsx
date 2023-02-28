import React from 'react';
// import PropTypes from 'prop-types';

function NavBar() {
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
          Nome do usuário
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          Sair
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  // setInputNameValue: PropTypes.func.isRequired,
  // setInputEmailValue: PropTypes.func.isRequired,
  // setInputPasswordValue: PropTypes.func.isRequired,
};

export default NavBar;
