import React from 'react';
import Link from 'next/link';
import { AppBar, List, ListItem, Toolbar, Typography } from '@material-ui/core';

import styles from './AppBarStyles.module.scss';

export function CustomAppBar() {
  return (
    <>
      <AppBar className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <List className={styles.list}>
            <ListItem className={styles.listItem}>
              <Link href="/" passHref>
                <Typography className={styles.text}>Home</Typography>
              </Link>
            </ListItem>
            <ListItem className={styles.listItem}>
              <Link href="/about" passHref>
                <Typography className={styles.text}>About</Typography>
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
}
