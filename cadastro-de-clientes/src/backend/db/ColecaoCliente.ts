import { initializeApp } from 'firebase/app';
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFireStore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                produto: cliente.produto,
                contato: cliente.contato,
                valor: cliente.valor,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.produto, dados.contato, dados.valor, snapshot.id)
        }
    }

    async salvar(cliente: Cliente) : Promise<Cliente>{
        if(cliente?.id){
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente) : Promise<void>{
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos() : Promise<Cliente[]>{
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return 
            firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}