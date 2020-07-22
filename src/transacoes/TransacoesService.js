import axios from 'axios';
const TransacoesService = {}

TransacoesService.ObterTransacoes = async () => {
    return await axios.get('http://localhost:3001/transacoes').then(({data}) => data);
}

export default TransacoesService;
