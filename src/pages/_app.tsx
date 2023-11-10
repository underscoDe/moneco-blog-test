import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { Outfit } from 'next/font/google';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
import '@/styles/colors.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--outfit',
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --outfit: ${outfit.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <NextNProgress
          color='#f7b132'
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
