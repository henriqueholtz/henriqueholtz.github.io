import Head from '../components/Head';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List, ListItem, Link } from '@material-ui/core';
import { Article } from '../types';

export default function Articles() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchAsync = async () => {
      await axios
        .get(`api/articles`)
        .then((resp) => {
          console.log('data', resp.data);
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
      <Head title="About" />
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <h3>Articles</h3>
          <List>
            {data?.map((art) => (
              <ListItem key={art.id}>
                <Link
                  color="initial"
                  href={art.url}
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                >
                  {art.description}
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
}
