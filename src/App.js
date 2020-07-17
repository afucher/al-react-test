import React from 'react';
import Conta from './conta/Conta';
import Transação from './transacoes/Transacao';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ByteBank</h1>
      </header>

      <Conta />
      <Transação  estabelecimento="Alura" valor={33.08} data={new Date(2020, 6, 1)}/>
      <Transação  estabelecimento="Caelum" valor={27.67} data={new Date(2020, 6, 9)}/>
      <Transação  estabelecimento="Steam" valor={97.62} data={new Date(2020, 6, 10)}/>
      <Transação  estabelecimento="Mercado do bairro" valor={40.88} data={new Date(2020, 6, 16)}/>
    </div>
  );
}

export default App;
