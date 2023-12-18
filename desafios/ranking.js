//* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//* depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
const prompt = require('prompt-sync')();


function calcularRanking (){
    let vitorias = prompt("Informe a quantidade de vítorias: ")
    let derrotas = prompt("Informe a quantidade de derrotas: ")
    let categoria;
    let saldo = vitorias - derrotas;

    switch (true) {
        case (saldo <= 11): categoria = 'Ferro'; break;
        case (saldo <= 21): categoria = 'Bronze'; break;
        case (saldo <= 51): categoria = 'Prata'; break;
        case (saldo <= 81): categoria = 'Ouro'; break;
        case (saldo <= 90): categoria = 'Diamante'; break;
        case (saldo <= 100): categoria = 'Lendário'; break;    
        default: categoria = 'Imortal';
    }
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${categoria}`)
    return saldo;
}
let saldo = calcularRanking()
