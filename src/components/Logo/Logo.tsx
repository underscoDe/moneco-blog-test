import Image from 'next/image';

import { LogoProps } from '@/components/Logo';

function Logo({ ...delegated }: LogoProps) {
  const src = '';
  return (
    <>
      <Image
        src={src}
        alt='Moneco Blog Logo'
        width='80'
        height='29'
        {...delegated}
      />
    </>
  );
}

export default Logo;
