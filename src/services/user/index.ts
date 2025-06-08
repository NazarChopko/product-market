import { AxiosResponse } from 'axios';
import { $baseUrl, $authUrl } from '../config';

import type { UserResponse } from '@/types/user';

export const login = async (username: string, password: string): Promise<UserResponse> => {
  const { data } = await $baseUrl.post<{ username: string; password: string }, AxiosResponse<UserResponse>>(
    '/auth/login',
    { username, password }
  );
  return data;
};

export const getUser = async (): Promise<UserResponse> => {
  const { data } = await $authUrl.get<null, AxiosResponse<UserResponse>>('/auth/me');
  return data;
};
