import * as React from 'react';

import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <Nav logoVariant='white' backgroundColor='#0aa478' />
        <Hero />
        <Articles />
        <Footer />
      </main>
    </Layout>
  );
}

function Hero() {
  return (
    <section className='bg-primary pb-24 pt-[70px]'>
      <div className='mx-auto lg:max-w-[75%]'>
        <h2 className='font-outfit text-[32px] font-bold text-white'>
          We want to share more with you!
        </h2>
        <p className='font-outfit mt-5 max-w-[417px] text-[20px] leading-6 text-white'>
          Thoughts and updates on the future of money transfer for the African
          diaspora, from the people and teams creating it.
        </p>
      </div>
    </section>
  );
}
