import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

import { calculateReadingTime } from '@/lib/helper';
import useFetchSingleArticle from '@/hooks/useFetchSingleArticle';

import Footer from '@/components/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

import { STRAPI_URL } from '@/constant/env';
import { Article } from '@/entities/article/types';

export default function SinglePost() {
  const router = useRouter();
  const slug = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug;

  const { data, isError, isLoading, fetchSingleArticle } =
    useFetchSingleArticle();

  const article = data ? (data as Article[])[0] : undefined;

  React.useEffect(() => {
    if (slug) {
      fetchSingleArticle({ slug });
    }
  }, [fetchSingleArticle, slug]);
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='bg-[#fff7e4]'>
        <Nav logoVariant='black' backgroundColor='#fffdf9' />
        {article ? (
          <div className='mx-auto py-20 lg:max-w-[75%]'>
            <div className='w-full'>
              <div className=''>
                <Link className='mb-4 flex items-center' href='/homepage'>
                  <FaArrowLeft size='1rem' />{' '}
                  <span className='ml-3 text-[#00122C]'>Go back home</span>
                </Link>
              </div>
              <Image
                width='1536'
                height='864'
                src={
                  (article.preview_image?.data?.url &&
                    `${STRAPI_URL}${article.preview_image?.url}`) ||
                  `${STRAPI_URL}${article.header_image?.url}` ||
                  '/images/blog-1.webp'
                }
                className='mb-4 h-[400px] w-full object-cover'
                alt='Image 1'
              />
              <h3 className='font-outfit mb-2 mt-[18px] text-[32px] text-xl font-bold leading-tight text-gray-900'>
                <a href='#'>{article.title}</a>
              </h3>
              <div className='flex flex-wrap gap-x-2'>
                {article.tags.map((tag, i) => (
                  <Link
                    key={i}
                    className='text-decoration-none font-outfit mb-2 rounded-full bg-[#F2F3F4] px-2 pb-1 pt-[2px] text-base'
                    href='#'
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
              <span className='items-center text-[14px] font-medium text-[#007554]'>
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: 'numeric',
                }).format(new Date(article.createdAt))}{' '}
                · {calculateReadingTime(article.content)} min read
              </span>
              <ReactMarkdown className='mt-3'>{article.content}</ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className='mx-auto py-40 lg:max-w-[75%]'>
            <Link className='mb-4 flex items-center' href='/homepage'>
              <FaArrowLeft size='1rem' />{' '}
              <span className='ml-3 text-[#00122C]'>Go back home</span>
            </Link>
            <h5 className='text-center'>
              Sorry! We looked everywhere, found nothing!
            </h5>
            <Image
              width='1536'
              height='864'
              src='/svg/not-found.svg'
              className='mb-4 mt-10 h-[400px] w-full'
              alt='Image 1'
            />
          </div>
        )}
        <Footer />
      </main>
    </Layout>
  );
}
