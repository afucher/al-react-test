import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente principal', () => {
  it('mostra o nome do banco', () => {
    render(<App />);

    expect(screen.getByText('ByteBank')).toBeInTheDocument();
  });
});
