//missão 3
class Inventario{
    cargaMaxima:number
    itens: string[]

    constructor(){
        this.cargaMaxima = 5
        this.itens = []
    }
    adicionarItem(nomeDoItem: string){
        if(this.itens.length < this.cargaMaxima){
        this.itens.push(nomeDoItem)
        } else{
            console.log("Mochila cheia!")
        }
    }
}

enum EstadoJogador{
    Vivo = 'VIVO',
    Morto = 'MORTO',
    Envenenado = 'ENVENENADO'
}

class Personagem {
    public nome: string
    protected vida: number
    public mochila: Inventario
    public estado: EstadoJogador

    constructor(nome: string){
        this.nome = nome
        this.vida = 100
        this.mochila = new Inventario()
        this.estado = EstadoJogador.Vivo
    }

    atacar(){
        console.log(`${this.nome} desferiu um ataque básico`)
    }

    esquivar(){
        console.log(`${this.nome} tentou rolar para longe do perigo`)
    }

    apresentar(){
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.vida} de HP!`)
    }
    get lerVida():number {
        return this.vida
    }
    set receberDano(dano:number){
        this.vida -= dano
        if(this.vida < 0){
            this.vida = 0
        }
    }
}

let heroi = new Personagem("Marlon")

heroi.apresentar()

class Pocao {
    nome: string
    private cura: number

    constructor(nomeRecebido: string, curaRecebida: number){
        this.nome = nomeRecebido
        this.cura = curaRecebida
    }
    
    consumir(){
        console.log(`O item ${this.nome} recuperou ${this.cura} de HP!`)
    }
    get lerCura():number {
        return this.cura
    }
}

let pocaoDeus = new Pocao("Poção Vdos Deuses", 50)

pocaoDeus.consumir()

heroi.nome = "Marlon Cosmicamente Ilimitado PLUS ULTRA"


class Mago extends Personagem{
    public mana: number

    constructor(nomeMago: string){
        super(nomeMago)
        this.mana = 100
        this.vida = 80
    }

    atacar(){
        if(this.mana >= 20){
            console.log(`${this.nome} conjurou uma Tempestade impetuosa`)
            this.mana -= 20
        } else{
            console.log(`${this.nome} está sem mana e bateu com o cajado!`)
        }
    }
}


let mago9Reinos = new Mago("Mago dos 9 Reinos")

mago9Reinos.atacar()

class Guerreiro extends Personagem{
    public furia: number

    constructor(nomeGuerreiro: string){
        super(nomeGuerreiro)
        this.furia = 0
        this.vida = 150
    }
}

let guerreiroSupremo = new Guerreiro("Marlon o Feroz")


// Missão 1
class Arqueiro extends Personagem {
    public flechas: number

    constructor(nomeArqueiro: string){
        super(nomeArqueiro)
        this.flechas = 20
    }

    atacar() {
        if(this.flechas > 0){
            console.log(`${this.nome} disparou uma flecha veloz!`)
            this.flechas -= 1
        } else{
            console.log(`${this.nome} está sem flechas é preciso regarregar!`)
        }
    }
}

let arcoAbilidiso = new Arqueiro("Houyi")


// Missão 2
arcoAbilidiso.esquivar()
// Isso ocorreu por arcoCerteiro ser uma extensão da classe pai Personagem, herdando propriedades dele.


// Missão 4
let legolas = new Arqueiro("Legolas")
legolas.atacar()
legolas.atacar()
legolas.atacar()

legolas.mochila.adicionarItem("Arco Elfico")

console.log(`Itens na mochila de Legolas: ${legolas.mochila.itens}`)

arcoAbilidiso.esquivar()

