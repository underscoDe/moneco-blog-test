import { AxiosError } from 'axios';

import { ApiResponse } from '@/entities/article/types';
import Client from '@/utils/APIClient';

export default class Article {
  async getArticles({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }): Promise<ApiResponse> {
    try {
      const response = await Client.get(
        `/articles?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`
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
