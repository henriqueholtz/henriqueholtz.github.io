import { CssBaseline } from '@material-ui/core';
import type { AppProps } from 'next/app';
import { Footer } from '../components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
