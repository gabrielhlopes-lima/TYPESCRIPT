//ArenaCreft

// exercicio 1 - instalação do TypeScript

//R: npm initi -y

//R: npm install typescript tsx @type/mode --save-dev 

//R: tsc -init

//exercicio 2 - vilão 

//nome do mostro ; Hp, mostro(500) ; chefão(true ou Fause)

const nameBoss: string = "o ultimo monarca"
let hpMonstro:number = 500
const chefão: string = "true" 

console.log(`mostro encontrado ele é ${nameBoss} . HP ${hpMonstro} . é um Chefão :${chefão}`)

//exercicio 3 - poção de HP

const pocaoHp:number = 100

 if(hpMonstro >= 500){
    console.log(`O monstro ${nameBoss} ultrapassou o limite de Hp e voltou para 500!`)
 }  else{
    console.log(`O monstro${nameBoss} recuperou sua vida e está cpm ${hpMonstro} de HP!`)
 }


 //exercicio 4 - machadada 

 for(let i:number = 0; i<5; i++){
    console.log(`machadada ${i}! Você encontrou +1 de madeira`)
 }

//exercicio 5 - ferreiro 

const calcularRessistencia=(armaduraBase:number):number =>{
    return armaduraBase+15

}
console.log(`armadura restaurada ${calcularRessistencia(30)}`)