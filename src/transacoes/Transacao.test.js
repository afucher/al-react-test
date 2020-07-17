import React from 'react';
import { render, screen } from '@testing-library/react';
import Transação from './Transacao';

test('mostra estabelecimento', () => {
  render(<Transação estabelecimento="Mercadinho do bairro" valor={0} data={new Date()}/>);
  
  expect(screen.getByText('Mercadinho do bairro')).toBeInTheDocument();
});

test('mostra valor', () => {
  render(<Transação valor={12.87} data={new Date()}/>);
  
  expect(screen.getByText('R$ 12,87')).toBeInTheDocument();
});

test('mostra data', () => {
  render(<Transação data={new Date(1990, 4, 4)} valor={0}/>);
  
  expect(screen.getByText('04 MAI')).toBeInTheDocument();
});