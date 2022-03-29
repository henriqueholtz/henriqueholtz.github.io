import { Link, List, ListItem } from '@material-ui/core';
import React from 'react';
import { GitHubIcon, LinkedinIcon } from '../Icons';
import styles from './FooterStyles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <List className={styles.icons}>
        <ListItem key="github-icon" className={styles.icon}>
          <Link
            color="initial"
            href="https://github.com/henriqueholtz"
            target="_blank"
            rel="noreferrer"
            underline="none"
          >
            <GitHubIcon
              viewBox="7 5 50 50"
              style={{ width: '25px', height: '25px' }}
            />
          </Link>
        </ListItem>
        <ListItem key="github-icon" className={styles.icon}>
          <Link
            color="initial"
            href="https://www.linkedin.com/in/henrique-holtz/"
            target="_blank"
            rel="noreferrer"
            underline="none"
          >
            <LinkedinIcon
              viewBox="0 0 130 130"
              style={{ width: '25px', height: '25px' }}
            />
          </Link>
        </ListItem>
      </List>
    </footer>
  );
}
