import React from 'react';
import axios from 'axios';
import { render, wait, screen } from '@testing-library/react';
import Transações from './Transacoes';

jest.mock('axios');

describe('Componente de transações', () => {
    it('cria componente e chama API', async () => {

        axios.get.mockResolvedValue({data:[]});
        render(<Transações />)
        await wait(() => expect(axios.get).toHaveBeenCalledTimes(1))
    })

    it('mostra transações que vieram da API', async () => {
        axios.get.mockResolvedValue({data:[{
            "id": 1,
            "estabelecimento": "Alura",
            "valor": 33.08,
            "data": "2020/7/1"
        },
        {
            "id": 2,
            "estabelecimento": "Mercado",
            "valor": 20,
            "data": "2020/7/9"
        }]});

        render(<Transações />);

        await screen.findByText("Alura");

        expect(screen.getByTestId('transacoes').children.length).toBe(2);
    })
    
})
