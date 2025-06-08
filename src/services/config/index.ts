import axios, { InternalAxiosRequestConfig } from 'axios';

const $baseUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const $authUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const authInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;

  return config;
};

$authUrl.interceptors.request.use(authInterceptor);

export { $baseUrl, $authUrl };
