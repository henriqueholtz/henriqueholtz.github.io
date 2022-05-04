import React, { useState, useEffect } from 'react';
import CustomHead from '../components/Head';
import axios from 'axios';
import { List, ListItem, Typography, Link } from '@material-ui/core';
import { Project } from '../types/Project';

export default function Projects() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Project[] | null>(null);

  useEffect(() => {
    const fetchAsync = async () => {
      await axios
        .get(`/api/projects.json`)
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
      <CustomHead title="Projects" />
      {loading ? (
        <Typography>Loading</Typography>
      ) : (
        <>
          <Typography variant="h2">Projects</Typography>
          <List>
            {data?.map((project: Project) => (
              <ListItem key={project.id}>
                <Typography
                  variant="body1"
                  style={{ marginRight: '5px', fontWeight: 700 }}
                >
                  {project.title}
                </Typography>
                <Link
                  color="initial"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                >
                  See the repository
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
}
