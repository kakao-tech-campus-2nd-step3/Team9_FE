import { QueryClient } from '@tanstack/react-query';
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 3000,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'Cross-Control-Allow-Origin': '*',
    },
  });

  // API 요청 시마다 최신 토큰을 가져옴
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
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
      staleTime: 60000, // 1 min
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },
  },
});
