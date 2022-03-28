import { Link, List, ListItem } from '@material-ui/core';
import React from 'react';
import { GitHubIcon } from '../Icons';
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
      </List>
    </footer>
  );
}
