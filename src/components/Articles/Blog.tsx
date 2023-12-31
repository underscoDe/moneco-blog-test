import Image from 'next/image';
import Link from 'next/link';

import { calculateReadingTime } from '@/lib/helper';

interface BlogCardProps {
  title: string;
  previewUrl: string;
  tags: string[];
  excerpt: string;
  createdAt: Date;
  content: string;
  slug: string;
}

function BlogCard({
  title,
  previewUrl,
  tags,
  excerpt,
  createdAt,
  content,
  slug,
}: BlogCardProps) {
  const formattedDateDay = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(createdAt);

  const formattedDateTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(createdAt);

  return (
    <article className='mb-16 max-w-sm'>
      <div className='relative'>
        <Image
          width='1536'
          height='864'
          src={previewUrl}
          className='mb-4 h-[240px] w-full object-cover'
          alt='Image 1'
        />
        <span className='text-decoration-none font-outfit absolute left-[4%] top-[4%] rounded-full bg-[#007554] px-4 py-1 text-base text-white'>
          {formattedDateDay} · {formattedDateTime}
        </span>
      </div>
      <div className='flex flex-wrap gap-x-2'>
        {tags.map((tag) => (
          <Link
            key={tag}
            className='text-decoration-none font-outfit rounded-full bg-[#F2F3F4] px-2 pb-1 pt-[2px] text-base'
            href='#'
          >
            {tag}
          </Link>
        ))}
      </div>
      <h3 className='font-outfit mb-2 mt-3 text-[20px] text-xl font-bold leading-tight text-gray-900'>
        <Link href={`/${slug}`}>{title}</Link>
      </h3>
      <p className='mb-2 text-[14px] font-medium text-black'>{excerpt}</p>
      <span className='items-center text-[14px] font-medium text-[#007554]'>
        {formattedDateDay} · {calculateReadingTime(content)} min read
      </span>
    </article>
  );
}

export default BlogCard;
