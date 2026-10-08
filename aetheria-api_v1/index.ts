
(  () =>{
    let chaveServidor = "XYZ-999"
    console.log("servidor Inicializando com segurança!")
})
const calcularDano = (forca: number, multiplicador: number): number =>{
    return forca*multiplicador
}

const aplicarDano = (HpAtual: number, danoCalculado: number, onMorte: Function): void =>{
    if(danoCalculado >= HpAtual){
        onMorte()
    }else{
        const hpRestante = HpAtual - danoCalculado
        console.log(`Você sobreviveu com ${hpRestante} HP!`)
    }

}

console.log("O monstro atacou!")
const meuDanoCritico = calcularDano(35, 2)

aplicarDano(100, meuDanoCritico,() => {
    console.log("Você faleceu dolorosamente")
})