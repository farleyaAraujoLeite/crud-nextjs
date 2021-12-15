import React, {useState} from 'react'
import Entrada from './Entrada'
import Botao from './Botao'
import Cliente from '../core/Cliente'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}


export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? ' ')
    const [produto, setProduto] = useState(props.cliente?.produto ?? '')
    const [contato, setContato] = useState(props.cliente?.contato ?? '')
    const [valor, setValor] = useState(props.cliente?.valor ?? 0)
    return (
        <div>
            {id ? (
                <Entrada 
                somenteLeitura
                texto="Código" 
                valor={id} 
                className="mb-4"
                />
            ): false}
            
            <Entrada 
            texto="Nome" 
            valor={nome}
            valorMudou={setNome} 
            className="mb-4"
            />

            <Entrada 
            texto="Produto" 
            tipo="text" 
            valor={produto}
            valorMudou={setProduto} 
            />

            <Entrada 
            texto="Contato" 
            tipo="string" 
            valor={contato}
            valorMudou={setContato} 
            />

            <Entrada 
            texto="Valor" 
            tipo="number" 
            valor={valor}
            valorMudou={setValor} 
            />

            <div className="flex justify-end mt-7">
                <Botao className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, produto, contato, valor, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}