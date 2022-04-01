import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

export default function CustomHead({ title }: Props) {
  return (
    <>
      <Head>
        <title>{`[${title}] - Henrique Holtz`}</title>
      </Head>
    </>
  );
}
