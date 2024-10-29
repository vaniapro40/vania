const livro = {
    titulo: 'chiquinho',
    autor: 'baltasar lopes',
    anoPublicacao: 1899,
    getInfo: function() {
        return `${this.titulo} de ${this.autor}, publicado em ${this.anoPublicacao}.`;
    },
    isClassico: function() {
        return this.anoPublicacao < 1990;
    }
};

console.log(livro.getInfo());
console.log(livro.isClassico());

//2
function criarPessoa(nome, idade, profissao) {
    return {
        nome,
        idade,
        profissao,
        saudar: function() {
            return `Olá, meu nome é ${this.nome}.`;
        },
        mostrarInfo: function() {
            return `${this.nome}, ${this.idade} anos, profissão: ${this.profissao}.`;
        }
    };
}

const pessoa1 = criarPessoa('vania', 31, 'pasteleira');
console.log(pessoa1.saudar());
console.log(pessoa1.mostrarInfo());

//3

class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    mostrarDetalhes() {
        return `Produto: ${this.nome}, Preço: R$${this.preco}, Categoria: ${this.categoria}`;
    }
}

const produto1 = new Produto('bolos', 1500, 'doces');
produto1.aplicarDesconto(10);
console.log(produto1.mostrarDetalhes());

//4
class Eletronico extends Produto {
    constructor(nome, preco, categoria, garantia) {
        super(nome, preco, categoria);
        this.garantia = garantia;
    }

    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}, Garantia: ${this.garantia} anos`;
    }
}

const eletronico1 = new Eletronico('pizzas', 1200, 'salgados', 2);
console.log(eletronico1.mostrarDetalhes());

//5
class ContaBancaria {
    #saldo;
    constructor(titular) {
        this.#saldo = 0;
        this.titular = titular;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    verSaldo() {
        return `Saldo: R$${this.#saldo}`;
    }
}

const conta = new ContaBancaria('João');
conta.depositar(500);
conta.sacar(200);
console.log(conta.verSaldo());

//6
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salario + this.bonus;
    }
}

const funcionario1 = new Funcionario('Carlos', 3000);
const gerente1 = new Gerente('Fernanda', 5000, 1000);

console.log(funcionario1.calcularSalario());
console.log(gerente1.calcularSalario());

//7
class ItemInventario {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    calcularValorTotal() {
        return this.quantidade * this.preco;
    }
}

const inventario = {
    itens: [],
    adicionarItem(item) {
        this.itens.push(item);
    },
    calcularValorTotalEstoque() {
        return this.itens.reduce((total, item) => total + item.calcularValorTotal(), 0);
    }
};

inventario.adicionarItem(new ItemInventario('Produto A', 10, 50));
inventario.adicionarItem(new ItemInventario('Produto B', 5, 100));
console.log(inventario.calcularValorTotalEstoque());

//8
class Departamento {
    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(f => f.nome !== nome);
    }
}

class Desenvolvedor extends Funcionario {
    projetoAtual() {
        return `O desenvolvedor ${this.nome} está trabalhando no projeto XYZ.`;
    }
}

class Designer extends Funcionario {
    portfolio() {
        return `O designer ${this.nome} tem um portfólio disponível em www.portfolio.com/${this.nome}.`;
    }
}

const departamento = new Departamento();
departamento.adicionarFuncionario(new Desenvolvedor('Lucas', 4000));
departamento.adicionarFuncionario(new Designer('Maria', 3500));

//9
class Quarto {
    constructor(numero, tipo, preco) {
        this.numero = numero;
        this.tipo = tipo;
        this.preco = preco;
        this.reservado = false;
    }

    reservar() {
        this.reservado = true;
    }

    cancelar() {
        this.reservado = false;
    }

    isDisponivel() {
        return !this.reservado;
    }
}

class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = [];
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }

    verificarDisponibilidade() {
        return this.quartos.filter(quarto => quarto.isDisponivel());
    }
}

const hotel = new Hotel('Hotel Luxo', 'São Paulo');
hotel.adicionarQuarto(new Quarto(101, 'Simples', 200));
hotel.adicionarQuarto(new Quarto(102, 'Luxo', 500));
console.log(hotel.verificarDisponibilidade());


//10
class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true;
    }

    
    

    devolver() {
        this.disponivel = true;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarDisponiveis(genero = null) {
        return this.livros.filter(livro => livro.disponivel && (!genero || livro.genero === genero));
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(new Livro('1984', 'George Orwell', 'Ficção'));
biblioteca.adicionarLivro(new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 'Fantasia'));
const livros = biblioteca.livros[0];
livro.emprestar();
console.log(biblioteca.listarDisponiveis());



