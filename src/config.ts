import axiosInterface  from 'axios'

export const API_URL = process.env.REACT_APP_API_URL;

export const API_KEY = process.env.REACT_APP_API_KEY;

export const API_URL_FULL = `${API_URL}${API_KEY}`;


export const axios = axiosInterface.create({
    baseURL: API_URL_FULL,
    timeout: 2000,
});