import { post } from './baseService';

const login = async (body) => post({ url: 'auth/Login', body })
  .then((resp) => {
    sessionStorage.setItem('token', resp.data.token);
    return 200;
  })
  .catch((error) => error.response.data.errors[0]);

export default { login };
