import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import ProjectsPage from './projects';

describe('ProjectsPage', () => {
  beforeEach(() => {
    act(() => {
      render(<ProjectsPage />);
    });
  });
  it('renders a heading', () => {
    expect(screen.getByTestId('CustomHead')).toBeInTheDocument();
  });
});
