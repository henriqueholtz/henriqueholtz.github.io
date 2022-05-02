import React from 'react';
import { AppBar, List, Toolbar } from '@material-ui/core';
import { Item } from './Item';

import styles from './AppBarStyles.module.scss';

export function CustomAppBar() {
  return (
    <>
      <AppBar className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <List className={styles.list}>
            <Item path="/" text="Home" />
            <Item path="/about" text="About" />
            <Item path="/articles" text="Articles" />
            <Item path="/certificates" text="Certificates" />
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
}
