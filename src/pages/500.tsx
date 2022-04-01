import React from 'react';
import Head from '../components/Head';
import { Typography } from '@material-ui/core';

export default function CustomInternalServerError() {
  return (
    <>
      <Head title="500" />
      <Typography
        variant="h3"
        variantMapping={{ h3: 'h1' }}
      >{`500 - Internal Server Error`}</Typography>
    </>
  );
}
