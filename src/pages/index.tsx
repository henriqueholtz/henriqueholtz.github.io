import Head from '../components/Head';
import { Typography } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Typography
        variant="h3"
        variantMapping={{ h3: 'h1' }}
      >{`Welcome to my webpage!`}</Typography>
    </>
  );
}
