import axios from "axios";

export const initAxios = () => {
  axios.defaults.baseURL = 'https://pip-backend-server.herokuapp.com';

  const token = localStorage.getItem('JWT_USER_TOKEN');
  token && (axios.defaults.headers.common['Authorization'] = token);

}