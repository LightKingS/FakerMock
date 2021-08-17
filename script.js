const faker = require('faker-br');

let datas = []

function geraDados(quantidade){
    for (let i = 0; i < quantidade; i++){
        const obj = {
            nome: faker.name.firstName() + ' ' + faker.name.lastName(),
            nascimento: faker.date.between(1910,2019),
            genero: faker.name.gender(),
            ultimaCompra: faker.date.between(2018, 2021),
            contaCompras: faker.random.number({
                'min': 0,
                'max': 30
            })
        }
        datas.push(obj)
    }
}
geraDados(100)

function procuraNome(inicial){
    return datas.filter((value) => value.nome.startsWith(inicial))
}

function retornaClientes(){
    return datas
}

function contaNome(inicial){
    return datas.filter((cliente) => cliente.nome.startsWith(inicial)).reduce((acc, value) => (acc += 1), 0)
}

function retornaNomesCompletos(){
    return datas.map((cliente) => cliente.nome)
}

function retornaNomes(){
    return datas.map((cliente) => cliente.nome.split(" ")[0])
}

function retornaNomesPorInicial(inicial){
    return dados = datas.filter((value) => value.nome.startsWith(inicial)).map((cliente) => cliente.nome.split(" ")[0])
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function retornaMaioresDeIdade(){
    return datas.filter((value) => getAge(value.nascimento) > 18)
}

function retornaSeContemNome(nome){
    if(retornaNomes().includes(nome)){
        return "Contém"
    } else {
        return "Não contém"
    }
}

function totalDeVendas(){
    return datas.reduce((count, datas) => count + datas.contaCompras, 0)
}

function retornaClientesSemComprar(){
    return datas.filter((clientes) => getAge(clientes.ultimaCompra) > 1)
}

function retornaClientes15Compras(){
    return datas.filter((clientes) => clientes.contaCompras > 15)
}


//console.log(procuraNome('A'))

//console.log(retornaClientes())

//console.log(contaNome('A'))

//console.log(retornaNomesCompletos())

//console.log(retornaNomes())

//console.log(retornaNomesPorInicial('A'))

//console.log(retornaMaioresDeIdade())

//console.log(retornaSeContemNome("André"))

//console.log(totalDeVendas())

//console.log(retornaClientesSemComprar())

//console.log(retornaClientes15Compras())