import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Conta from './Conta';

jest.mock('axios');

afterEach(() => {
  axios.get.mockClear();
})

beforeEach(() => {
  axios.get.mockResolvedValue({data: {saldo: 1234.57}});
});

describe('Componente da Conta', () => {
  it('renderiza Conta', async () => {
    render(<Conta />);
    await waitForElementToBeRemoved(() => screen.getByText('carregando'));
    const títuloDaConta = screen.getByText('Conta');
    expect(títuloDaConta).toBeInTheDocument();
  });

  it('apresenta valor do saldo da conta com símbolo de REAL', async () => {
    render(<Conta />);
    await waitForElementToBeRemoved(() => screen.getByText('carregando'));
    const saldo = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Saldo: R$ 1234,57";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
    expect(saldo).toBeInTheDocument();
  });

  describe('uma conta tem a opção de esconder/mostrar saldo', ()=> {
    it('apresenta opção esconder saldo da conta', async () => {
      render(<Conta />);
      await waitForElementToBeRemoved(() => screen.getByText('carregando'));
      const esconderSaldo = screen.getByText('Esconder saldo');
      expect(esconderSaldo).toBeInTheDocument();
    });
  
    it('alterna entre opção de mostrar saldo e esconder saldo ao ser clicada', async () => {
      render(<Conta />);
      await waitForElementToBeRemoved(() => screen.getByText('carregando'));
      fireEvent.click(screen.getByText('Esconder saldo'));
  
      expect(screen.queryByText('Esconder saldo')).not.toBeInTheDocument();
  
      fireEvent.click(screen.getByText('Mostrar saldo'));
  
      expect(screen.queryByText('Mostrar saldo')).not.toBeInTheDocument();
      expect(screen.getByText('Esconder saldo')).toBeInTheDocument();
    });
  
    it('esconde o valor do saldo do saldo da conta quando clica em Esconder saldo', async () => {
      render(<Conta />);
      await waitForElementToBeRemoved(() => screen.getByText('carregando'));
      
      fireEvent.click(screen.getByText('Esconder saldo'));
  
      expect(screen.getByText('R$ ----,--')).toBeInTheDocument();
    });
  })

});
