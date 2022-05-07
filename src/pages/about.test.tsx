import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import AboutPage from './about';

describe('AboutPage', () => {
  beforeEach(() => {
    act(() => {
      render(<AboutPage />);
    });
  });
  it('renders a heading', () => {
    expect(screen.getByTestId('CustomHead')).toBeInTheDocument();
  });
});
