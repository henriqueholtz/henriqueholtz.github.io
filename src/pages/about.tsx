import Head from '../components/Head';
import { Typography } from '@material-ui/core';
import React from 'react';

export default function About() {
  return (
    <>
      <Head title="About" />
      <Typography variant="h3" variantMapping={{ h3: 'h1' }}>
        {`Hi, I'm Henrique Holtz!`}
      </Typography>
    </>
  );
}
