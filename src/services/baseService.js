import axios from 'axios';

export const get = ({ url, params }) => new Promise((resolve, reject) => {
  const data = new URLSearchParams(params).toString();
  const token = sessionStorage.getItem('token');
  axios.get(`${process.env.REACT_APP_BASE_API}/${url}?${data}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export const post = ({ url, body }) => new Promise((resolve, reject) => {
  axios.post(`${process.env.REACT_APP_BASE_API}/${url}`, body)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});
