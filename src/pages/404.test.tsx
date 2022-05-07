import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import Page404 from './404';

describe('Page404', () => {
  beforeEach(() => {
    act(() => {
      render(<Page404 />);
    });
  });
  it('renders a heading', () => {
    expect(screen.getByTestId('CustomHead')).toBeInTheDocument();
  });
});
