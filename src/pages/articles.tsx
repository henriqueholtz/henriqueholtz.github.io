import Head from '../components/Head';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List, ListItem, Link, Typography } from '@material-ui/core';
import { Article } from '../types';

export default function Articles() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchAsync = async () => {
      await axios
        .get(`/api/articles.json`)
        .then((resp) => {
          console.log('data', resp);
          setData(resp.data);
          setLoading(false);
          setError(false);
        })
        .catch(() => setError(true));
    };
    fetchAsync();
  }, []);

  return (
    <>
      <Head title="Articles" />
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <Typography variant="h2">Articles</Typography>
          <List>
            {data?.map((art) => (
              <ListItem key={art.id}>
                <Typography
                  variant="body1"
                  style={{ marginRight: '5px', fontWeight: 700 }}
                >
                  {art.title}
                </Typography>
                <Link
                  color="initial"
                  href={art.url}
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                >
                  See complete content
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
}
