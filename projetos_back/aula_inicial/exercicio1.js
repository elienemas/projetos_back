// function multiplicaNumero(n1,n2) {
// return n1 * n2
// }
// // soma1 = multiplicaNumero(4,5)
// console.log(multiplicaNumero(4,5))

// function dividir(a,b){
// return a / b
// }
// resultado = dividir(multiplicaNumero(4,5),5)
// console.log(resultado)

function inverterNome(nome){
        let inverterNomes = nome.split(" ")
        return inverterNomes[1]+ " " + inverterNomes[0]
}
let nome = "Eliene Maria Alves da Silva"
console.log(inverterNome(nome))