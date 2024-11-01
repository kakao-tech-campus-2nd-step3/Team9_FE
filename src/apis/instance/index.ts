import { QueryClient } from '@tanstack/react-query';
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

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

export const fetchInstance = (baseURL = BASE_URL) => {
  return initInstance({
    baseURL,
  });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});
