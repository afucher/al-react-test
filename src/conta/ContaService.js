import axios from 'axios';
const ContaService = {}

ContaService.ObterSaldo = async () => {
    return await axios.get('http://localhost:3001/conta').then(({data}) => data.saldo);
}

export default ContaService;
