import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'Cross-Control-Allow-Origin': '*',
    },
  });

  return instance;
};

export const fetchInstance = (baseURL: string) => {
  return initInstance({
    baseURL,
  });
};
