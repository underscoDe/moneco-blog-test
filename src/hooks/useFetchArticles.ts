import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import api from '@/api';
import { ApiResponse } from '@/entities/article/types';
import { setHeaders } from '@/utils/APIClient';

export default function useFetchArticles() {
  setHeaders();

  const { data, isLoading, isError, mutate } = useMutation(api.getArticles, {
    onSuccess: (_data) => {
      // eslint-disable-next-line no-console
      console.info('fetch:SUCCESS');
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        const errorMessage =
          (error.response.data as { message?: string })?.message ||
          'An error occurred.';
        // eslint-disable-next-line no-console
        console.error(errorMessage);
      } else {
        // eslint-disable-next-line no-console
        console.error('An error occurred');
      }
    },
  });

  const articles = (data as ApiResponse)?.results || [];
  const meta = (data as ApiResponse)?.pagination;

  console.log('meta:', meta);

  return {
    fetchArticles: mutate,
    data: data || [],
    articles,
    meta,
    isLoading,
    isError,
  };
}
