const loginRequisition = async (email, password) => {
  const response = await fetch('http://localhost:3001/login', {
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
  const response = await fetch('http://localhost:3001/register', {
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
