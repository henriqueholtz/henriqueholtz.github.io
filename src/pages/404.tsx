import React from 'react';
import Head from 'next/head';
import { Typography } from '@material-ui/core';

export default function CustomNotFound() {
  return (
    <>
      <Head>
        <title>{`[404] - Henrique Holtz`}</title>
      </Head>
      <Typography
        variant="h3"
        variantMapping={{ h3: 'h1' }}
      >{`I'm sorry, this page doesn't exist!`}</Typography>
    </>
  );
}
