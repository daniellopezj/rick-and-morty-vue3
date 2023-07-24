import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const useBackend = async (
  url: string = '',
  request?: AxiosRequestConfig, // Axios-specific request type
): Promise<unknown> => {
  const response = await axios({
    ...request,
    url,
    baseURL: import.meta.env.VITE_BASE_API,
  });
  return response.data;
};
