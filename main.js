// Abstração
class Casa {
    constructor(apartamento, predio, anoDoLancamento, anoDaObra) {
        this.apartamento = apartamento;
        this.predio = predio;
        this.anoDoLancamento = anoDoLancamento;
        this.anoDaObra = anoDaObra;
    }

    entrada() {
        console.log("casa1");
    }
}

// Classes herdeiras
class CasaDoDiego extends Casa {
    constructor() {
        super("Apartamento", "Prédio", 2024, 2018);
    }
}

class CasaDaFlavia extends Casa {
    constructor() {
        super("Duplex", "Casa", 2022, 2019);
    }
}

// Instâncias das classes
const casaDoDiego = new CasaDoDiego();
const casaDaFlavia = new CasaDaFlavia();

console.log(casaDoDiego);
console.log(casaDaFlavia);
