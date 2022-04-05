// FUNÇÃO sem parâmetro

// function pegarHora(){
//     return new Date()
// }

//funções com ARROW FUNCTION

// mostrarHora = (msg) => {
//     return msg + new Date()
// }
// console.log(pegarHora())
// console.log(mostrarHora('A hora é: '))

// funções ARROW e Anonimas e auto executada
(function pegarHora(msg){
    console.log (msg+ new Date())
}) (' A HORA FOI: ')

//ARROW FUNCTION 
var mostrarHora1 = (msg) =>{
    console.log(msg + new Date())
 }
mostrarHora1 = ('A hora é: ')

const mostrarHora2 = function (msg){
    return msg + new Date
}