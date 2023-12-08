function calcularRanking (vitorias, derrotas){
    let saldo = vitorias - derrotas

    if (saldo <= 10){
        console.log(`O Herói tem de saldo de ${saldo} está no nível de Ferro`)
    }
    else if (saldo <= 20){
        console.log(`O Herói tem de saldo de ${saldo} está no nível de Bronze`)
    }
    else if (saldo <= 50){
        console.log(`O Herói tem de saldo de ${saldo} está no nível de Prata`)
    }
    else if (saldo <= 80){
        console.log(`O Herói tem de saldo de ${saldo} está no nível de Ouro`)
    }
    else if (saldo <= 90){
        console.log(`O Herói tem de saldo de ${saldo} está no nível de Diamante`)
    }
    else if (saldo <= 100){
        console.log(`O Herói tem de saldo de ${saldo} está no nível de lendario`)
    }
    else{
        console.log(`O Herói tem de saldo de ${saldo} está no nível de Imortal`)
    }
    return saldo
}
let saldo = calcularRanking(52, 1)



