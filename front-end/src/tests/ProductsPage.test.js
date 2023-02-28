import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import productMock from '../mocks/product.mock';

const URL = '/customer/products';
const SEE_CART = 'Ver Carrinho: R$ 0.00';

describe('Testa a página de produtos', () => {
  it('Testa se a página contém os elementos especificados', () => {
    renderWithRouter(<App />, { initialEntries: [URL] });
    const productsLink = screen
      .getByTestId('customer_products__element-navbar-link-products');
    const ordersLink = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    const fullName = screen
      .getByTestId('customer_products__element-navbar-user-full-name');
    const logoutLink = screen
      .getByTestId('customer_products__element-navbar-link-logout');
    expect(productsLink).toBeInTheDocument();
    expect(ordersLink).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });

  it('Testa se a página contém os produtos especificados', () => {
    renderWithRouter(<App />, { initialEntries: [URL] });
    productMock.forEach(({ id, name, price }) => {
      const productName = screen
        .getByTestId(`customer_products__element-card-title-${id}`);
      const productPrice = screen
        .getByTestId(`customer_products__element-card-price-${id}`);
      expect(productName).toBeInTheDocument();
      expect(productPrice).toBeInTheDocument();
      expect(productName).toHaveTextContent(name);
      expect(productPrice).toHaveTextContent(`R$ ${price.toFixed(2)}`);
    });
  });

  it('Testa se o botão de carrinho contém o valor correto', () => {
    renderWithRouter(<App />, { initialEntries: [URL] });
    const cartButton = screen
      .getByTestId('customer_products__button-cart');
    const cartValue = screen
      .getByTestId('customer_products__checkout-bottom-value');
    expect(cartButton).toBeInTheDocument();
    expect(cartValue).toBeInTheDocument();
    expect(cartValue).toHaveTextContent(SEE_CART);
  });

  it('Testa se o botão de adicionar um item ao carrinho funciona', () => {
    renderWithRouter(<App />, { initialEntries: [URL] });
    const cartButton = screen
      .getByTestId('customer_products__button-cart');
    const cartValue = screen
      .getByTestId('customer_products__checkout-bottom-value');
    const firstProductAdd = screen
      .getByTestId('customer_products__button-card-add-item-1');
    const firstProductRemove = screen
      .getByTestId('customer_products__button-card-rm-item-1');
    const firstProductInput = screen
      .getByTestId('customer_products__input-card-quantity-1');
    expect(cartButton).toBeInTheDocument();
    expect(cartValue).toBeInTheDocument();
    expect(cartValue).toHaveTextContent(SEE_CART);
    expect(firstProductAdd).toBeInTheDocument();
    firstProductAdd.click();
    expect(cartValue).toHaveTextContent('1 Ver Carrinho: R$ 2.20');
    expect(firstProductRemove).toBeInTheDocument();
    firstProductRemove.click();
    expect(cartValue).toHaveTextContent(SEE_CART);
    expect(firstProductInput).toBeInTheDocument();
    fireEvent.change(firstProductInput, { target: { value: 2 } });
    expect(cartValue).toHaveTextContent('2 Ver Carrinho: R$ 4.40');
  });
});
