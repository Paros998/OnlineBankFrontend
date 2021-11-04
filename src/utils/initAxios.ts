import axios from "axios";

export const initAxios = () => {
  axios.defaults.baseURL = 'https://pip-backend-server.herokuapp.com';
  axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Connection'] = 'keep-alive';
}