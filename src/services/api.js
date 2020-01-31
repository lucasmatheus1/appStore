import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-testenodejs-3b9ac.cloudfunctions.net/api',
});

export default api;