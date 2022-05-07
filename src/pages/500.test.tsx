import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import Page500 from './404';

describe('Page500', () => {
  beforeEach(() => {
    act(() => {
      render(<Page500 />);
    });
  });
  it('renders a heading', () => {
    expect(screen.getByTestId('CustomHead')).toBeInTheDocument();
  });
});
