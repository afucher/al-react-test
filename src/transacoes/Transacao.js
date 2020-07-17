import React from 'react';
import { ConverteMês } from '../helpers/converteMes'
import './Transacao.css'


const Transação = ({estabelecimento, valor, data}) => {
    return <div className="transacao-container">
        <p>{data.getDate().toString().padStart(2,0)} {ConverteMês(data.getMonth())}</p>
        <p>{estabelecimento}</p>
        <p>R$ {valor.toLocaleString().replace('.',',')}</p>
    </div>
};


export default Transação;