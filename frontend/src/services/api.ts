import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://humble-drop-production.up.railway.app',
  timeout: 10000
});

export const apiKenzieCars = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com',
  timeout: 10000
});
