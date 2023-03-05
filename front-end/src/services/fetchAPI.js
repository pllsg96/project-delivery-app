const STANDARD_PORT = 3001;
const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const PORT = process.env.REACT_APP_BACKEND_PORT || STANDARD_PORT;
const URL = `http://${HOST}:${PORT}`;

const loginRequisition = async (email, password) => {
  const response = await fetch(`${URL}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return response;
};

const registerRequisition = async (name, email, password) => {
  const response = await fetch(`${URL}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  return response;
};

const fetchAPI = {
  loginRequisition,
  registerRequisition,
};

export default fetchAPI;
