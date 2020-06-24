import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ByteBank title', () => {
  render(<App />);

  expect(screen.getByText(`ByteBank`)).toBeInTheDocument();
});
