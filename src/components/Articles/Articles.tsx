import * as React from 'react';
import { FormEvent } from 'react';
import { FaUndo } from 'react-icons/fa';

import useFetchArticles from '@/hooks/useFetchArticles';

import BlogCard from '@/components/Articles/Blog';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';

import { STRAPI_URL } from '@/constant/env';

const PAGE_SIZE = 6;

function Articles() {
  const { articles, meta, isLoading, fetchArticles } = useFetchArticles();

  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchInputValue, setSearchInputValue] = React.useState('');

  const pageSize = PAGE_SIZE;

  React.useEffect(() => {
    fetchArticles({ page, pageSize, searchTerm });
  }, [fetchArticles, page, pageSize, searchTerm]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(searchInputValue);
  };

  return (
    <section aria-label='Blog' className='bg-gray-50 py-8 lg:py-28'>
      <div className='mx-auto max-w-[70%] px-4'>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <form onSubmit={onSubmit} className='mb-5 lg:w-[50%]'>
              <label
                htmlFor='default-search'
                className='sr-only mb-2 text-sm font-medium text-gray-900'
              >
                Search
              </label>
              <div className='relative'>
                <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
                  <svg
                    className='h-4 w-4 text-gray-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  value={searchInputValue}
                  onChange={(e) => setSearchInputValue(e.target.value)}
                  type='search'
                  id='default-search'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500'
                  placeholder='Search from title...'
                  required
                />
                <div className='absolute bottom-2.5 end-2.5'>
                  <button
                    type='button'
                    onClick={() => {
                      setSearchTerm('');
                      setSearchInputValue('');
                    }}
                    className='mr-3'
                  >
                    <FaUndo color='' size='1rem' />
                  </button>
                  <button
                    type='submit'
                    className='bg-primary rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {articles.map((article) => (
                <BlogCard
                  key={article.id}
                  title={article.title}
                  previewUrl={
                    (article.preview_image?.data?.url &&
                      `${STRAPI_URL}${article.preview_image?.url}`) ||
                    `${STRAPI_URL}${article.header_image?.url}` ||
                    '/images/blog-1.webp'
                  }
                  tags={article.tags.map((tag) => tag.name)}
                  excerpt={article.excerpt}
                  createdAt={new Date(article.createdAt)}
                  content={article.content}
                />
              ))}
            </div>
            <div className='flex flex-wrap justify-center gap-3 p-6 py-12'>
              <Pagination
                gotoPage={setPage}
                canPreviousPage={page > 1}
                canNextPage={page < (meta?.pageCount || 1) - 1}
                pageCount={meta?.pageCount || 1}
                pageIndex={page}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Articles;
