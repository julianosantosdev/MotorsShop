import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://motorsshop-tfzb.onrender.com',
  timeout: 12000
});

export const apiKenzieCars = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com',
  timeout: 10000
});
