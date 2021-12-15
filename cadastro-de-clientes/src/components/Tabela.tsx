import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";


interface TabelaProps {
    clientes: Clientes[] // Espera receber um array de clientes que será renderizado aqui na tabela de clientes
    clienteSelecionado?: (cliente: Cliente) => void 
    clienteExcluido?: (cliente: Cliente) => void 
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Produto</th>
                <th className="text-left p-4">Contato</th>
                <th className="text-left p-4">Valor</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false }
            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)} className= {`
                flex justify-center items-center
                text-green-700 rounded-full hover:bg-green-50 p-2 m-1                 
                `}>
                    {IconeEdicao}
                </button> 
                ): false}

                {props.clienteExcluido ? (
                <button onClick={() => props.clienteExcluido?.(cliente)} className= {`
                flex justify-center items-center
                text-red-500 rounded-full hover:bg-green-50 p-2 m-1                 
                `}>
                    {IconeLixo}
                </button> 
                ): false}
            </td>
        )
    }

    function renderiarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr Key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}
                >
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.produto}</td>
                    <td className="text-left p-4">{cliente.contato}</td>
                    <td className="text-left p-4">{cliente.valor}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )

        })
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                bg-gradient-to-r from-blue-600 to-blue-800
                text-gray-100
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderiarDados()}
            </tbody>
            
        </table>
    )
}