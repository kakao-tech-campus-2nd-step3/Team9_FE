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

  // todo: 검색 등은 토큰 넣지 말기
  // API 요청 시마다 최신 토큰을 가져옴
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');

    // 요청 URL이 BASE_URL인 경우에만 Authorization 헤더 추가
    // 외부 API는 Authorization이 필요 없으므로
    if (token && config.baseURL === BASE_URL) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return instance;
};

const fetchInstance = (baseURL = BASE_URL) => {
  return initInstance({
    baseURL,
  });
};

export default fetchInstance;
