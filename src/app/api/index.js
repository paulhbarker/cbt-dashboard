import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://www.cbtnuggets.com/api'
});

export const setAccessToken = (token) => {
    API.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
};
