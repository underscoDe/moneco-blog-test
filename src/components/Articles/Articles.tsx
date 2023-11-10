import * as React from 'react';

import BlogCard from '@/components/Articles/Blog';

function Articles() {
  return (
    <section aria-label='Related articles' className='bg-gray-50 py-8 lg:py-28'>
      <div className='mx-auto max-w-[70%] px-4'>
        <h2 className='mb-8 text-2xl font-bold text-gray-900'>
          Related articles
        </h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from([1, 2, 3, 4, 5, 6]).map((x) => (
            <BlogCard
              key={x}
              title='Money transfers to Africa for the past 10 years'
              previewUrl='/images/blog-1.webp'
              tags={['Money transfer', 'Policies']}
              excerpt='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
              readingTime={0}
              date='Jan 26'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
