import React, { useState, useEffect } from 'react';
import CustomHead from '../components/Head';
import axios from 'axios';
import {
  List,
  ListItem,
  Link,
  Typography,
  Card,
  Avatar,
} from '@material-ui/core';
import { Certificate } from '../types/certificate';

export default function Certificates() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Certificate[] | null>(null);

  useEffect(() => {
    const fetchAsync = async () => {
      await axios
        .get(`/api/certificates.json`)
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
      <CustomHead title="Certificates" />
      {loading ? (
        <Typography>Loading</Typography>
      ) : (
        <>
          <Typography variant="h2">Certificates</Typography>
          <List>
            {data?.map((cert: Certificate) => (
              <ListItem key={cert.id}>
                <Avatar
                  variant="rounded"
                  src={cert.url}
                  style={{ width: '50px', marginRight: '8px' }}
                  className="d-inline-block"
                />
                <Card style={{ width: '100%', padding: '3px 8px' }}>
                  <Typography
                    style={{ fontWeight: 700 }}
                    className="d-inline-block"
                  >{`${cert.title} - `}</Typography>
                  <Link
                    color="initial"
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    underline="none"
                    className="d-inline-block"
                    style={{ paddingLeft: '5px' }}
                  >
                    See my certificate
                  </Link>
                  {/* {cert.description} */}
                  <p style={{ paddingLeft: '5px' }} className="d-inline-block">
                    {cert.tags?.map((tag) => ` #${tag} `)}
                  </p>
                </Card>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
}
