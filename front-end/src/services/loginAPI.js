import api from '../lib/axios';
import statusCode from '../utils/statusCode';

const loginRequisition = async (email, password) => {
  try {
    const { data } = await api.post('/login', { email, password });
    return data;
  } catch (error) {
    if (error.response.status === statusCode.NOT_FOUND) {
      return error.response.data;
    }
  }
};

export default loginRequisition;
