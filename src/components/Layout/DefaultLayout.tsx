import React from 'react';
import { CustomAppBar, Footer } from '../index';

type DefaultLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <CustomAppBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
