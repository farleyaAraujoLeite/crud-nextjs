export default class Cliente {
    #id: string
    #nome: string
    #produto: string
    #contato: string
    #valor: number

    constructor(nome: string, produto: string, contato: string, valor: number, id: string = null){
        this.#id = id
        this.#nome = nome
        this.#produto = produto
        this.#contato = contato
        this.#valor = valor
        
    }

    static vazio(){
        return new Cliente(' ')
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get produto(){
        return this.#produto
    }
    get contato(){
        return this.#contato
    }
    get valor(){
        return this.#valor
    }
}