//1
let  nome_Player: string = "20comer_70correr "
let Idade: number =27 
const Classe:string = "assassino"
let isPremiun9: boolean = true

console.log (`Nome Jogador : ${nome_Player} \n Idade : ${Idade} \n Classe : ${Classe} \n Premiun : ${isPremiun9}`)

//2
let forca:number = 75
const multiplicador4: number = 3
const danototal : number = forca * multiplicador4

console.log(`Dano : ${danototal}`)

//3 
let RepJogador: number = 18
if(RepJogador > 15){
    console.log("Pode entrar na Masmorra")
}
else{
    console.log("Você é muito fraco, volte depois")
}

//4 
let numSorte: number = 5
if(numSorte <= 10){
    console.log("Item Lendario")
}
else if (numSorte <=50){
    console.log("Item Raro")
}

else{
    console.log("Item Comum")
}

//5
console.log("habilidades do personagem")
switch (Classe){
    case "assassino":
        console.log("aura assasina(invisibilidade por 7 segundos)")
        break
    case "mago":
        console.log("Rajada de magia ")
        break 
    case "curandeiro":
        console.log("medicina")
        break
    case "guerreiro ":
        console.log("Furia (duplica a força)")
        break
    case "arqueiro":
        console.log("dispara flecha \n")
        break 
}
 
//6
console.log(`Opção 1: Comprar Espada \n Opção 2: Comprar Escudo \n Opção 3: Sair \n`)

const  lojaFerro: number = 2
switch (lojaFerro){
    case 1:
        console.log("Opção 1 selecionada: Comprar Espada")
        break
    case 2: 
        console.log("Opção 2 selecionada: Comprar Escudo")
        break
    case 3:
        console.log("Opção 3 selecionada: Sair")
    break
}


(  () =>{
    let chaveServidor = "XYZ-999"
    console.log("servidor Inicializando com segurança!")
})

const aplicarDano2 = (HpAtual: number, danoCalculado: number, onMorte: Function): void =>{
    if(danoCalculado >= HpAtual){

    }

}

