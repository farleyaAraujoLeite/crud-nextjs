import { useState, useEffect } from 'react';
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import Tabela from "../components/Tabela";
import Layout from "../components/Layout";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useTabelaOuForm from '../hooks/useTabelaOuForm'




export default function useClientes(){
  

  const repo: ClienteRepositorio = new ColecaoCliente()

  const { tabelaVisivel, exibirTabela, exibirFormulario,  } = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }
  
  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    exibirFormulario()
  }

  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
  }
  
  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

    return {
        
       cliente, 
       clientes,
       salvarCliente,
       novoCliente,
       clienteExcluido,
       clienteSelecionado,
       obterTodos,
       tabelaVisivel,
       exibirTabela,
                 


    }

}