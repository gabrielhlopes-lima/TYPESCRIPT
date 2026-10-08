// exemplo 1
let forcaDano:number = 50//let-> varia durante a execução. 
const multiplica:number = 1.5// const-> nunca muda durante a execução.

let msximoDano:number = forcaDano* multiplica 

console.log(`O dano total é ${msximoDano}.`)
// console.log ->mostra no terminal.
//${}consolida a variavel ( apenas é utilizado quando quer colocar testo depois da variavel).

//exercicio 2

//if& else

let sorte:number=8

if(sorte<= 10){
    console.log(`Item Lendario!!`)
} else if(sorte<= 50 ){
    console.log(`Item raro`)
} else{
    console.log(`Item Comum!`)
}

//exemplo 3

//  for 

for(let i:number = 10; i >=0;i--){
    if(i === 0){
      console.log("BUM!")
    } else{
        console.log(i)
    }
}

//exemplo 4

for (let i: number = 1; i<11; ++i){
    console.log(`Golpe ${i} desferido.`)
}
