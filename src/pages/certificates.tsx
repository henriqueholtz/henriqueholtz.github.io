import React, { useState } from 'react';
import CustomHead from '../components/Head';
import { List, ListItem, Link } from '@material-ui/core';
import { Certificate } from '../types/certificate';

export default function Certificates() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Certificate[] | null>(null);

  return (
    <>
      <CustomHead title="Certificates" />
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <h3>Certificates</h3>
          <List>
            {data?.map((art: Certificate) => (
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
