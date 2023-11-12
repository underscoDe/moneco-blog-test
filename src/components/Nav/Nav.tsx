import * as React from 'react';

import Logo from '@/components/Logo';

interface NavProps {
  logoVariant: 'white' | 'black' | 'common';
  backgroundColor: string;
}

function Nav({ logoVariant, backgroundColor }: NavProps) {
  return (
    <section style={{ backgroundColor }} className='py-5'>
      <div className='mx-auto lg:max-w-[75%]'>
        <Logo variant={logoVariant} />
      </div>
    </section>
  );
}

export default Nav;
