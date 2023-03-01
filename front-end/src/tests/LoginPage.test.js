import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const EMAIL_DATATESTID = 'common_login__input-email';
const PASSWORD_DATATESTID = 'common_login__input-password';
const LOGIN_BUTTON_DATATESTID = 'common_login__button-login';
const REGISTER_BUTTON_DATATESTID = 'common_login__button-register';

describe('Testa a página de login', () => {
  it('Testa se a página contém os elementos especificados', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const loginButton = screen.getByTestId(LOGIN_BUTTON_DATATESTID);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('Testa se, com email inválido, a mensagem de erro é exibida', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const loginButton = screen.getByTestId(LOGIN_BUTTON_DATATESTID);
    fireEvent.change(emailInput, { target: { value: 'emailinvalido' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText('Email inválido!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Testa se, com senha inválida, a mensagem de erro é exibida', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const loginButton = screen.getByTestId(LOGIN_BUTTON_DATATESTID);
    fireEvent.change(emailInput, { target: { value: 'pedro@pedro.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText('Senha inválida!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Testa se o botão de registro redireciona para a página de registro', () => {
    const { history } = renderWithRouter(<App />);
    const registerButton = screen.getByTestId(REGISTER_BUTTON_DATATESTID);
    fireEvent.click(registerButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/register');
  });

  it('Testa se o botão de login redireciona para a página de receitas', async () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const loginButton = screen.getByTestId(LOGIN_BUTTON_DATATESTID);
    fireEvent.change(emailInput, { target: { value: 'fulana@deliveryapp.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(loginButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/customer/products');
  });
});
