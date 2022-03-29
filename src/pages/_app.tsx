import { CssBaseline } from '@material-ui/core';
import type { AppProps } from 'next/app';
import { DefaultLayout } from '../components';

import '../styles/Colors.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
