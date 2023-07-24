import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const useBackend = async (
  url: string = '',
  request?: AxiosRequestConfig, // Axios-specific request type
): Promise<AxiosResponse> => {
  const response = await axios({
    ...request,
    url,
    baseURL: process.env.baseURL,
  });

  return response;
};
