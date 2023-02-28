import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const NAME_DATATESTID = 'common_register__input-name';
const EMAIL_DATATESTID = 'common_register__input-email';
const PASSWORD_DATATESTID = 'common_register__input-password';
const REGISTER_BUTTON_DATATESTID = 'common_register__button-register';

describe('Testa a página de registro', () => {
  it('Testa se a página contém os elementos especificados', () => {
    renderWithRouter(<App />, { initialEntries: ['/register'] });
    const nameInput = screen.getByTestId(NAME_DATATESTID);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const registerButton = screen.getByTestId(REGISTER_BUTTON_DATATESTID);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('Testa se, com nome inválido, a mensagem de erro é exibida', async () => {
    renderWithRouter(<App />, { initialEntries: ['/register'] });
    const nameInput = screen.getByTestId(NAME_DATATESTID);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const registerButton = screen.getByTestId(REGISTER_BUTTON_DATATESTID);
    fireEvent.change(nameInput, { target: { value: 'Pedro' } });
    fireEvent.change(emailInput, { target: { value: 'pedro@pedro.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(registerButton);
    const errorMessage = await screen.findByText('Nome inválido!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Testa se, com email inválido, a mensagem de erro é exibida', async () => {
    renderWithRouter(<App />, { initialEntries: ['/register'] });
    const nameInput = screen.getByTestId(NAME_DATATESTID);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const registerButton = screen.getByTestId(REGISTER_BUTTON_DATATESTID);
    fireEvent.change(nameInput, { target: { value: 'lgskdfjhgjksfdgn' } });
    fireEvent.change(emailInput, { target: { value: 'emailinvalido' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(registerButton);
    const errorMessage = await screen.findByText('Email inválido!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Testa se, com senha inválida, a mensagem de erro é exibida', async () => {
    renderWithRouter(<App />, { initialEntries: ['/register'] });
    const nameInput = screen.getByTestId(NAME_DATATESTID);
    const emailInput = screen.getByTestId(EMAIL_DATATESTID);
    const passwordInput = screen.getByTestId(PASSWORD_DATATESTID);
    const registerButton = screen.getByTestId(REGISTER_BUTTON_DATATESTID);
    fireEvent.change(nameInput, { target: { value: 'lgskdfjhgjksfdgn' } });
    fireEvent.change(emailInput, { target: { value: 'pedro@pedro.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });
    fireEvent.click(registerButton);
    const errorMessage = await screen.findByText('Senha inválida!');
    expect(errorMessage).toBeInTheDocument();
  });
});
