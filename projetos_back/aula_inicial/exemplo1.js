function somaNumero() { //funco sem paremetro com retorno
    console.log('passei na funcao 1')
    return 5 + 5
}

soma1 = somaNumero()
console.log(soma1)


function somaNumeroComParametro(n1, n2, message) {
    return message + (n1 + n2)
}

soma2 = somaNumeroComParametro(3, 5, 'a soma é: ')
console.log(soma2)

SomaNumeroFuncao = function(n1,n2) {
    return n1 + n2
}
soma3 = SomaNumeroFuncao(13,15)
console.log(soma3)