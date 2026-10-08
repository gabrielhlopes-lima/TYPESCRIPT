//Exercicio 1

const boasVindas = (): void =>{
    console.log("bem vindo ao Atheria Engine")
}

boasVindas()

//Exercicio 2 
const vidaJogador = (nome: string):void =>{
    console.log(`Olá ${nome}`)
}

vidaJogador("Gabriel Henrique")

//Exercicio 3

const emitirAlerta = () =>{
    for(let i: number = 0; i < 3; i){
        console.log("alerta de invasão ")
    }
}

//Ecercicio 4 
const calcularPreco = (valorBase: number): number => {
    return valorBase * 1.2
    
}
console.log(`Valor final : ${calcularPreco(50)}`)

//Exercicio 5 
const isVivo = (hp: number) =>{
    if(hp > 0){
        return true
    }
    else{
        return false
    }
}

console.log(`Jogador Está Vivo? -> ${isVivo(0.1)}`)

// Exercicio 6

const rolarDadoD20 = ():number => {
    return Math.floor(Math.random() * 20)+1
}

console.log(`numero rolado : ${rolarDadoD20()}`)

//exercicio 7
 const  classeFase = (nivel:number): string => {
    if(nivel <10){
        return "Iniciante"
    }
    if(nivel < 50){
        return "Intermediário"
    }
    return "Mestre"
}
console.log(`Sua Classe é :${classeFase(90)}`)

//exercicio 8

const cura =(hpAtual:number, pocao:number):number =>{
    if(hpAtual 
 }

}