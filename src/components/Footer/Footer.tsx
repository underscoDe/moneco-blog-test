import * as React from 'react';

import Logo from '@/components/Logo';

function Footer() {
  return (
    <section className='w-full bg-[#f6f9f8] pb-10 pt-12'>
      <div className='mx-auto lg:max-w-[92%]'>
        <Logo variant='common' className='mb-12' />
        <div className='font-outfit text-[#7d9790]'>
          © 2022 Moneco. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer;
