// FUNÇÕES DENTRO DE OUTRAS FUNÇÕES

somar  = (a,b) =>{
    return a + b 
}
dividir = (b) =>{
    return somar (8,5) / b
}

subtrair = (b) => {
    return dividir(4) - b
}

multiplicar = (b) => {
    return subtrair(3) * b
}
resultado = multiplicar(8)
console.log({resultado})