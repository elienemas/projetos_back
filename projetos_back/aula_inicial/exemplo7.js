clientes = [
{ nome: "henning", idade: 38 },
{ nome: "paulo", idade: 38 },
{ nome: "silvio", idade: 38 },
{ nome: "aline", idade: 38 },
]


function ehAdulto(pessoa){
    if(pessoa.idade >= 18) {
        console.log(`${pessoa.nome} é adulto`)
     }else {
         console.log(`${pessoa.nome} é menor de idade`)
     }
}

for (let i = 0; i < clientes.length; i++) {
ehAdulto(clientes[i])
}