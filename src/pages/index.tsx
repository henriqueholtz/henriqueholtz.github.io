import Head from '../components/Head';
import { Container, Typography } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Container>
        <Typography
          variant="h3"
          className="pt-20"
          variantMapping={{ h3: 'h1' }}
        >{`Welcome to my webpage!`}</Typography>
      </Container>
    </>
  );
}
