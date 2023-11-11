import { AxiosError } from 'axios';

import Client from '@/utils/APIClient';

export default class Article {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getArticles(): Promise<any> {
    try {
      const response = await Client.get('/articles');
      // eslint-disable-next-line no-console
      console.log('ARTICLES:', response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return response.data as any;
    } catch (error: unknown) {
      const errors = error as AxiosError;
      // eslint-disable-next-line no-console
      console.log(errors.response);
      throw error;
    }
  }
}
