import { post } from './baseService';

const loginService = async (body) => post({ url: 'auth/Login', body })
  .then(() => 200)
  .catch((error) => error.response.data.errors[0]);

export default { loginService };
