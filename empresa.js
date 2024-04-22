// Definição da função Funcionario
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
}

function Design(nome) {
    Funcionario.call(this, nome, "Design", 5000); // Herança de Funcionario

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Programador(nome) {
    Funcionario.call(this, nome, "Programador", 10000); // Herança de Funcionario

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Administracao(nome) {
    Funcionario.call(this, nome, "Administracao", 4000); // Herança de Funcionario

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

const funcionarioDesign = new Design("Carolina");
const funcionarioProgramador = new Programador("Pedro");
const funcionarioAdmistracao = new Administracao("Jane");

// método e saída de console
funcionarioDesign.aumento();
console.log(funcionarioDesign.getSalario())

funcionarioProgramador.aumento();
console.log(funcionarioProgramador.getSalario())

funcionarioAdmistracao.aumento();
console.log(funcionarioAdmistracao.getSalario())
