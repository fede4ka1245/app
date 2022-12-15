import axios, { AxiosRequestConfig } from 'axios';
import { LocalStorageKey } from '../models/enums/LocalStorageKey';

const authRequest = axios.create();

authRequest.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config?.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(LocalStorageKey.access) || ''}`;
  }
  return config;
});

authRequest.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  if (error.response.status !== 401 && error.response.status !== 403 || error.config?.isRetry === true) {
    console.log(error);
    throw error;
  }

  const targetRequest = error.config;
  targetRequest.isRetry = true;

  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/token/refresh/`, {
      refresh: localStorage.getItem(LocalStorageKey.refresh)
    });

    const { access } = response.data;

    localStorage.setItem(LocalStorageKey.access, access);

    return await authRequest.request(targetRequest);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export default authRequest;
