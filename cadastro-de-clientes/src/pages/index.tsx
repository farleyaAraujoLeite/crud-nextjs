

import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import useClientes from '../hooks/useClientes';



export default function Home() {

    const {
        cliente,
        clientes,  
        novoCliente, 
        clienteSelecionado, 
        clienteExcluido, 
        salvarCliente,
        exibirTabela,
        tabelaVisivel,
        } = useClientes()


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-gray-200 to-gray-400
    `}>
    <Layout titulo="Cadastro Simples de clientes para controle de vendas">
      {tabelaVisivel ? (
      <>
      <div className="flex justify-end">
        <Botao 
        className="mb-4"
        onClick={novoCliente}>
        Novo Cliente
        </Botao>
      </div>
      
      <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado} 
        clienteExcluido={clienteExcluido}
      />
      </>
      ) : (
      <Formulario cliente={cliente}
      clienteMudou={salvarCliente}
      cancelado={exibirTabela}
      />
      )}


    </Layout>
    </div>
  )
}
