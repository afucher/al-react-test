import React, { useState, useEffect } from 'react';
import ContaService from './ContaService';
import './Conta.css'

const Conta = () => {
    const [deveMostrarSaldo, mostraSaldo] = useState(true);
    const [saldoConta, carregaSaldo] = useState(0);
    const [carregando, estaCarrregando] = useState(false);
    const saldo = deveMostrarSaldo ? saldoConta.toString().replace('.',',') : "----,--";

    useEffect(() => {
        async function obterSaldo() {
            estaCarrregando(true);
            carregaSaldo(await ContaService.ObterSaldo());
            estaCarrregando(false);
        }
        obterSaldo();
    },[])

    return <div className="Conta-header">
        <h2>Conta</h2>
        {carregando && <span>carregando</span>}
        <p>Saldo: <span className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <button onClick={() => mostraSaldo(!deveMostrarSaldo)}>{deveMostrarSaldo ? "Esconder saldo" : "Mostrar saldo"}</button>
    </div>
}

export default Conta;
