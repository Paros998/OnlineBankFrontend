import axios from "axios";

export const initAxios = () => {
  axios.defaults.baseURL = 'https://pip-backend-server.herokuapp.com';
  //axios.defaults.baseURL = 'http://localhost:8080';

  const token = localStorage.getItem('JWT_USER_TOKEN');
  token && (axios.defaults.headers.common['Authorization'] = token);

}
