const prompt = require('prompt-sync')();


const nome = prompt("Qual é o nome do seu heroí? ")

const nivel = Number(prompt("Informe a quantidade de Xp do seu heroí: "))

if (nivel <= 1000){
    console.log("O heroí " + nome + " está no nivel Ferro")
}
else if (nivel >= 1001 && nivel <= 2000){
    console.log("O heroí " + nome + " está no nivel Bronze")
}
else if (nivel >= 2001 && nivel <= 5000){
    console.log("O heroí " + nome + " está no nivel Prata")
}
else if (nivel >= 6001 && nivel <= 7000){
    console.log("O heroí " + nome + " está no nivel Ouro")    
}
else if (nivel >= 7001 && nivel <= 8000){
    console.log("O heroí " + nome + " está no nivel Platina")
}
else if (nivel >= 8001 && nivel <= 9000){
    console.log("O heroí " + nome + " está no nivel Ascendente")
}
else if (nivel >= 9001 && nivel <= 10000){
    console.log("O heroí " + nome + " está no nivel Imortal")
}
else {
    console.log("O heroí " + nome + " está no nivel Radiante")
}