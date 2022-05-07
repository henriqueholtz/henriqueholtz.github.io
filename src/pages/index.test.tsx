import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import HomePage from './index';

describe('HomePage', () => {
  beforeEach(() => {
    act(() => {
      render(<HomePage />);
    });
  });
  it('renders a heading', () => {
    expect(screen.getByTestId('CustomHead')).toBeInTheDocument();
  });
});
