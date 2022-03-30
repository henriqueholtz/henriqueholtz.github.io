import Head from 'next/head';
import { Typography } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`[Home] - Henrique Holtz's Page`}</title>
      </Head>
      <Typography
        variant="h3"
        variantMapping={{ h3: 'h1' }}
      >{`Welcome!`}</Typography>
    </>
  );
}
