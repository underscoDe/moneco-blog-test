import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import api from '@/api';
import { setHeaders } from '@/utils/APIClient';

export default function useFetchSingleArticle() {
  setHeaders();

  const { data, isLoading, isError, mutate } = useMutation(
    api.getSingleArticle,
    {
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
    }
  );

  const article = data ? data[0] : [];

  return {
    fetchSingleArticle: mutate,
    data,
    article,
    isLoading,
    isError,
  };
}
