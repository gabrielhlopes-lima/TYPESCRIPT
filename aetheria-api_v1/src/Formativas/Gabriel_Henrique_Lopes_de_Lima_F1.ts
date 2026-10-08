// Exercício 1
let nome_player: string = "Raptor_volatil"
let idade: number = 27
const classe: string = "assassino"
let isPremiun: boolean = true
console.log(`--- Resumo do jogador --- \n Nome jogador: ${nome_player} \n Idade: ${idade} \n Guilda: ${classe} \n É Premiun: ${isPremiun}` )

// Exercício 2
let forca_de_dano: number = 75
const multiplicador: number = 3
let danoTotal: number = forca_de_dano * multiplicador
console.log(`Dano total: ${danoTotal}`)

//Exercício 3
let nivelJogador: number = 34
if (nivelJogador >= 15){
    console.log("Pode entrar na Masmorra")
}
else{
    console.log("Você é muito fraco, volte depois")
}

// Exercício 4
let numeroSorte: number = 7
if (numeroSorte <= 10){
    console.log("Item lendário!")
}
else if(numeroSorte <= 50){
    console.log("Item raro!")
}
else{
    console.log("Item comum!")
}

// Exercício 5
console.log("Habilidades do personagem")
switch (classe){
    case "assassino":
        console.log("-> sequencia mortal-danos extra com mais eliminações  ")
        break
    case "Guerreiro":
        console.log("-> soco forte ")
        break
    case "Necromante":
        console.log("-> Disparo de energia espiritual - Gera maldições de debuff")
        break
    case "Arqueiro":
        console.log("-> Disparo de flecha")
        break
    default:
        console.log("Classe inválida")
}

// Exercício 6
let escolha: number = 2
console.log("Menu do ferreiro")
switch (escolha){
    case 1:
        console.log("Comprar espada")
        break
    case 2:
        console.log("Comprar escudo")
        break
    case 3:
        console.log("Sair")
        break
}

//Exercício 7
let HpAtual:number = 16
let Mana: number = 22
if(HpAtual <= 0){
    console.log("Você está morto")
}
else if(Mana < 10){
    console.log("Falta de mana")
}
else{
    console.log("Cura realizada com sucesso!")
}

//Exercício 8
for(let i: number = 0; i < 10; i++ ){
    console.log(`Golpe ${i+1} desferido!`)
}

// Exercício 9
let Total: number = 0
for(let i: number = 0; i < 5; i++){
    console.log("Goblin derrotado! -> + 15 XP")
    Total += 15
    console.log(`Total de XP: ${Total}`)
}

// Exercício 10
for(let i: number = 0; i < 11; i++){
    if(i == 5){
        continue
    }
    console.log(`Salto no tempo: ${i}`)
}

//exercicio 11 
console.log("Fim do Mundo")
for(let i: number=10; i>=0; i--){
    if(i !=0){
        console.log(`contagem regreciva: ${i}`)
    }
    else{console.log("BUM!")}
}

//exercicio 12
let escudoChef: number = 100

while (escudoChef > 0 ){
    escudoChef -= 20 
    if(escudoChef != 0){
        console.log(`Dano no escudo! Resta: ${escudoChef}`)
    }
    else {
        console.log(`Resta : ${escudoChef}, Escudo Quebrado `)
    }
}

//exercicio 13 
let ferroColetado = 0
while(ferroColetado <10 ){
    ferroColetado += 1 
    console.log(`total de ferro coletado: ${ferroColetado}`)
}

//exercicio 14 

let xp: number = 0
let nivel: number = 1

while(nivel < 5){
    xp += 50 
    if(xp >= 100){
        xp -= 100
        nivel += 1 
    }
    console.log(`XP atual : ${xp} \n Nivel atual : ${nivel}`)
}

//exercicio 15
let hp_Heroi: number = 100
let hp_boss: number = 200

while( hp_Heroi > 0 && hp_boss > 0){
    hp_Heroi -= 20 
    hp_boss += 30 
    console.log("Em batalha ")
    console.log(`HP Boss : ${hp_boss}`)
    console.log(`HP Heroi : ${hp_Heroi}`)

    if (hp_boss <= 0){
        console.log(`Boss derrotado , Parabens!`)
    }
    if ( hp_Heroi <= 0){
        console.log("Game Over")
    }
}
