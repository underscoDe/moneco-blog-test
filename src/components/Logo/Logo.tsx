import Image from 'next/image';
import Link from 'next/link';

import { LogoProps } from '@/components/Logo';
import { variants } from '@/components/Logo';

function Logo({ variant, ...delegated }: LogoProps) {
  const src = variants[variant];
  return (
    <Link href='/homepage'>
      <Image
        src={src}
        alt='Moneco Blog'
        width='170'
        height='30'
        {...delegated}
      />
    </Link>
  );
}

export default Logo;
