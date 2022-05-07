import React from 'react';
import Head from 'next/head';
import { Typography } from '@material-ui/core';

interface Props {
  title: string;
}

export default function CustomHead({ title }: Props) {
  return (
    <>
      <Head>
        <title>{`[${title}] - Henrique Holtz`}</title>
      </Head>
      <Typography variant="h2" className="pl-10">
        {title}
      </Typography>
    </>
  );
}
