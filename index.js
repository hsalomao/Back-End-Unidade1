const { isValidDate } = require("./util");

class Endereco {
    constructor(logradouro, numero, cidade, uf, cep, bairro, pais) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.uf = uf;
        this.cep = cep;
        this.bairro = bairro;
        this.pais = pais;
    }

    infos = function () {
        return "End: " + this.logradouro + ", " + this.numero + "\n"
            + "Bairro: " + this.bairro + " - CEP: " + this.cep + "\n"
            + this.cidade + "/" + this.uf + " - " + this.pais;
    }
}
class Pessoa {
    constructor(nome, dataNascimento, genero, logradouro, numero, cidade, uf, cep, bairro, pais) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.endereco = new Endereco(logradouro, numero, cidade, uf, cep, bairro, pais);

        if (!isValidDate(this.dataNascimento)) {
            console.log('Data de nascimento ' + this.dataNascimento + ' não está no padrão DD/MM/AAAA. Favor preencher novamente.');
        }
    }

    infos = function () {
        return "Nome: " + this.nome + "\n"
            + "Data Nascimento: " + this.dataNascimento + "\n"
            + "Genero: " + this.genero + "\n"
            + this.endereco.infos();
    }
}

class User extends Pessoa {
    constructor(email, senha, nome, dataNascimento, genero, logradouro, numero, cidade, uf, cep, bairro, pais) {
        super(nome, dataNascimento, genero, logradouro, numero, cidade, uf, cep, bairro, pais);
        this.email = email;
        this.senha = senha;        
    }

    infos = function () {
        return "Email: " + this.email + "\n"
            + "Senha: " + this.senha + "\n"
            + "Nome: " + this.nome + "\n"
            + "Data Nascimento: " + this.dataNascimento + "\n"
            + "Genero: " + this.genero + "\n"
            + this.endereco.infos();
    }
}

//com data de nascimento no padrão DD/MM/AAAA
let usuario1 = new User("humberto@teste.com", "123456","Humberto", "08/03/1986", "Masculino", "Av. Paulista", 123, "São Paulo", "SP", "12345-678", "Consolação", "Brasil");
console.log(">>>>>Teste 1 \n" + usuario1.infos());

//sem data de nascimento no padrão DD/MM/AAAA
usuario1 = new User("humberto@teste.com", "123456","Humberto", "08/03/86", "Masculino", "Av. Paulista", 123, "São Paulo", "SP", "12345-678", "Consolação", "Brasil");
console.log(">>>>>Teste 2 \n" + usuario1.infos());
