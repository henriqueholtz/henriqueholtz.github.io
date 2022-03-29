import React from 'react';
import { CustomAppBar, Footer } from '../index';

import styles from './DefaultLayout.module.scss';

type DefaultLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <CustomAppBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
