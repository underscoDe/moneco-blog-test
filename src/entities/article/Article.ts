import { AxiosError } from 'axios';

import { ApiResponse } from '@/entities/article/types';
import Client from '@/utils/APIClient';

export default class Article {
  async getArticles({
    page,
    pageSize,
    searchTerm,
  }: {
    page: number;
    pageSize: number;
    searchTerm: string;
  }): Promise<ApiResponse> {
    try {
      const response = await Client.get(
        `/articles?page=${page}&pageSize=${pageSize}&populate=*&search=${searchTerm}`
      );
      // eslint-disable-next-line no-console
      console.log('ARTICLES:', response.data);
      return response.data as ApiResponse;
    } catch (error: unknown) {
      const errors = error as AxiosError;
      // eslint-disable-next-line no-console
      console.log(errors.response);
      throw error;
    }
  }
}
