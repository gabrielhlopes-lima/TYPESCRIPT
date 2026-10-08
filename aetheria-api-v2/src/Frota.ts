// Missão 1
enum TipoCombustivel {
    gasolina = "GASOLINA",
    alcool = "ÁLCOOL",
    diesel = "DIESEL",
    eletrico = "ELETRICO"
}

// Missão 2
class Veiculo {
    protected marca: string;
    protected modelo: string;
    protected velocidadeAtual: number;
    public combustivel: TipoCombustivel;

    constructor(marca: string, modelo: string, combustivel: TipoCombustivel) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.velocidadeAtual = 0;
    }

    public acelerar(): void {
        console.log("O veículo acelerou!");
    }

    // Desafio Bônus
    public frear(decremento: number = 15): void {
        this.velocidadeAtual -= decremento;

        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0;
        }

        console.log(`O veículo ${this.marca} ${this.modelo} freou. Velocidade atual: ${this.velocidadeAtual} km/h.`);
    }
}

// Missão 3 e 4
class Carro extends Veiculo {
    public numeroDePortas: number;

    constructor(marca: string, modelo: string, combustivel: TipoCombustivel, numeroDePortas: number) {
        super(marca, modelo, combustivel);
        this.numeroDePortas = numeroDePortas;
    }

    //acelerar() para Carro
    public acelerar(): void {
        this.velocidadeAtual += 20;
        console.log(`O carro ${this.marca} ${this.modelo} acelerou suavemente para ${this.velocidadeAtual} km/h.`);
    }
}

class Moto extends Veiculo {
    public cilindradas: number;

    constructor(marca: string, modelo: string, combustivel: TipoCombustivel, cilindradas: number) {
        super(marca, modelo, combustivel);
        this.cilindradas = cilindradas;
    }

    // Sobrescrevendo acelerar() para Moto
    public acelerar(): void {
        this.velocidadeAtual += 40;
        console.log(`A moto ${this.marca} ${this.modelo} cortou giro e saltou para ${this.velocidadeAtual} km/h!`);
    }
}

// Missão 5
const carro = new Carro("Honda", "Civic", TipoCombustivel.gasolina, 4);
const moto = new Moto("Yamaha", "MT-09", TipoCombustivel.gasolina, 900);

const garagem: Veiculo[] = [];
garagem.push(carro, moto);

console.log("--- Testando Aceleração (Polimorfismo) ---");
garagem.forEach((veiculo) => {
    veiculo.acelerar();
});

console.log("\n--- Testando Desafio Bônus (Frear) ---");
garagem.forEach((veiculo) => {
    veiculo.frear(50); // Reduz bastante para testar o limite de zero
});
