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
geraDados(1000)

function procuraNome(inicial){
    return datas.filter((value) => value.nome.startsWith(inicial))
}

function retornaClientes(){
    return datas
}

function contaNome(inicial){
    let x = datas.filter((value) => value.nome.startsWith(inicial))
    let contagem = 0
    for (i=0;i<x.length;i++){
        contagem++
    }
    return contagem
}

function retornaNomesCompletos(){
    let nomes = []
    for (let i=0; i<datas.length;i++){
        nomes.push(datas[i].nome)
    }
    return nomes
}

function retornaNomes(){
    let nomes = []
    for (let i=0; i<datas.length;i++){
        let x = datas[i].nome.split(' ')
        nomes.push(x[0])
    }
    return nomes
}

function retornaNomesPorInicial(inicial){
    let nomes = []
    let dados = datas.filter((value) => value.nome.startsWith(inicial))
    for (let i=0; i<dados.length;i++){
        let x = dados[i].nome.split(' ')
        nomes.push(x[0])
    }
    return nomes
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
    let maioresDeIdade = []
    for (i=0;i<datas.length;i++){

        let nascimento = datas[i].nascimento

        if (getAge(nascimento) > 18){
            maioresDeIdade.push(datas[i])
        }
    }
    return maioresDeIdade
}

function retornaSeContemNome(nome){
    if(retornaNomes().includes(nome)){
        return "Contém"
    } else {
        return "Não contém"
    }
}

function totalDeVendas(){
    totalCompras = 0
    for(i=0;i<datas.length;i++){
        totalCompras = totalCompras + datas[i].contaCompras
    }
    return totalCompras
}

function retornaClientesSemComprar(){
    clientes = []
    for(i=0;i<datas.length;i++){
        
        if(getAge(datas[i].ultimaCompra) > 1){
            clientes.push(datas[i])
        }
    }
    return clientes
}

function retornaClientes15Compras(){
    clientes = []
    for(i=0;i<datas.length;i++){
        
        if(datas[i].contaCompras > 15){
            clientes.push(datas[i])
        }
    }
    return clientes
}


console.log(procuraNome('A'))

console.log(retornaClientes())

console.log(contaNome('A'))

console.log(retornaNomesCompletos())

console.log(retornaNomes())

console.log(retornaNomesPorInicial('A'))

console.log(retornaMaioresDeIdade())

console.log(retornaSeContemNome("André"))

console.log(totalDeVendas())

console.log(retornaClientesSemComprar())

console.log(retornaClientes15Compras())