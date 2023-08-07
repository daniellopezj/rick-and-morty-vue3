import { CustomRequest } from '@/types/general.types';
import axios, { AxiosRequestConfig } from 'axios';

export const useBackend = async (
  url = '',
  request?: AxiosRequestConfig // Axios-specific request type
): Promise<CustomRequest> => {
  try {
    const response = await axios({
      ...request,
      url,
      baseURL: import.meta.env.VITE_BASE_API,
    });
    return {
      data: response.data,
    };
  } catch (error) {
    return { error };
  }
};
