import api from './api';

class LoginService {
  async login(username, password) {
    const response = await api.post('/login', { username, password });
    return response.data;
  }
}

export default new LoginService();
