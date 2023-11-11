import { useQuery } from '@tanstack/react-query';

import api from '@/api';
import { setHeaders } from '@/utils/APIClient';

export default function useFetchArticles() {
  setHeaders();

  const { data, isLoading, isError } = useQuery(['articles'], api.getArticles);

  return {
    data: data || [],
    isLoading,
    isError,
  };
}
