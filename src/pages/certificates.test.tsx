import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import CertificatesPage from './certificates';

describe('CertificatesPage', () => {
  beforeEach(() => {
    act(() => {
      render(<CertificatesPage />);
    });
  });
  it('renders a heading', () => {
    expect(screen.getByTestId('CustomHead')).toBeInTheDocument();
  });
});
