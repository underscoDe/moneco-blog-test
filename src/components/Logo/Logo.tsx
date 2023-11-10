import Image from 'next/image';

import { LogoProps } from '@/components/Logo';
import { variants } from '@/components/Logo';

function Logo({ variant, ...delegated }: LogoProps) {
  const src = variants[variant];
  return (
    <>
      <Image
        src={src}
        alt='Moneco Blog'
        width='170'
        height='30'
        {...delegated}
      />
    </>
  );
}

export default Logo;
