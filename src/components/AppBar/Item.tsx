import React from 'react';
import Link from 'next/link';
import { ListItem, Typography } from '@material-ui/core';

import styles from './AppBarStyles.module.scss';

interface Props {
  text: string;
  path: string;
}

export function Item({ text, path }: Props) {
  return (
    <ListItem className={styles.listItem}>
      <Link href={path.toLowerCase()} passHref>
        <Typography className={styles.text}>{text}</Typography>
      </Link>
    </ListItem>
  );
}
