import axios, { AxiosResponse } from 'axios';
import { ENABLE_CACHE } from './config';

const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config: any) {
  if (ENABLE_CACHE) {
    const cacheKey = config.url as string;

    // Check if the request URL exists in the localStorage and if the data is not older than 5 minutes
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < 5 * 60 * 1000) {
        return Promise.resolve({ ...config, data });
      }
    }
  }

  return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response: AxiosResponse) {
  if (ENABLE_CACHE) {
    const cacheKey = response.config.url as string;

    // Cache the response data in the localStorage for the corresponding URL
    localStorage.setItem(cacheKey, JSON.stringify({ data: response.data, timestamp: Date.now() }));
  }

  return response;
});

export default axiosInstance;
