import Head from '../components/Head';
import { Container, Typography, Avatar, Grid } from '@material-ui/core';
import { useGithubConfig } from '../hooks';
import React from 'react';
import { RequestStats } from '../types/axios/RequestStats';

export default function About() {
  const { stats, githubConfig } = useGithubConfig();
  const today = new Date();
  const myBirthDay = new Date(1999, 9, 7); // Oct 07 1999
  let myAge = today.getFullYear() - myBirthDay.getFullYear();
  const myBirthDayThisYear = new Date(
    today.getFullYear(),
    myBirthDay.getMonth(),
    myBirthDay.getDay()
  ); // Oct 07 {current Year}
  const birthdayThisYear = today.valueOf() > myBirthDayThisYear.valueOf();
  if (!birthdayThisYear) myAge -= 1;
  return (
    <>
      <Head title="About" />
      {stats === RequestStats.Executing && <h1>Loading</h1>}
      <Container
        style={{
          paddingTop: '50px',
          color: 'var(--white)',
          display: `${stats === RequestStats.Executing ? 'none' : ''}`,
        }}
      >
        <Grid container>
          <Grid item>
            <Typography variant="h3" variantMapping={{ h3: 'h1' }}>
              {`${githubConfig.name}`}
            </Typography>
            <Typography variant="body2" className="float-right">
              {`I'm ${myAge} years old.`}
            </Typography>
            <Typography
              variant="body2"
              className=""
              style={{ paddingTop: '1.75rem' }}
            >
              {`I'm working at`}
              <strong>{` ${githubConfig.company}. `}</strong>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Avatar
              src={githubConfig.avatarUrl}
              style={{
                marginLeft: '20px',
                width: '150px',
                height: '150px',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
