import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import ArticlesPage from './articles';

describe('ArticlesPage', () => {
  beforeEach(() => {
    act(() => {
      render(<ArticlesPage />);
    });
  });
  it('renders a heading', () => {
    expect(screen.getByTestId('CustomHead')).toBeInTheDocument();
  });
});
