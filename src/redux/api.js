import axios from 'axios';

export const contactsAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = (token) => {
  contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  contactsAPI.defaults.headers.common.Authorization = '';
};
