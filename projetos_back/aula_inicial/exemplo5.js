calculadora = {
    somar  : (a,b)=>{return 'somei', + (a + b)},
    dividir : (a,b)=>{return 'dividi', + (a / b)},
    subtrair : (a,b)=>{return 'subtrai', + (a - b)},
    multiplicar : (a,b)=>{return 'multipliquei', + (a * b)}
}

console.log(calculadora.somar(8,5))
console.log(calculadora.dividir(8,5))
console.log(calculadora.subtrair(8,5))
console.log(calculadora.multiplicar(8,5))