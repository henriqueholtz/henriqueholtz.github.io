import React from 'react';
import { Footer } from '../Footer';

type DefaultLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
