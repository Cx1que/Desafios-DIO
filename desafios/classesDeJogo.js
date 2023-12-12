const prompt = require('prompt-sync')();


class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack(){
        switch(this.type){
            case "mago":
                console.log(`o ${this.type} atacou usando magia`)
                break
        case "guerreiro":
            console.log(`o ${this.type} atacou usando espada`)
            break
        case "monge":
            console.log(`o ${this.type} atacou usando taijutsu`)
            break
        case "ninja":
            console.log(`o ${this.type} atacou usando shuriken`)
            break        
        }
        
    }
}

let mago = new hero("Jullius", 34, "mago")
let guerreiro = new hero("Oscar", 28, "guerreiro")
let monge = new hero("Strange", 36, "monge")
let ninja = new hero("Naruto", 17, "ninja")

function choice(hero) {
    console.log("Qual classe de herói você deseja ser? ");
    let opcoes = {
      0: ["mago"],
      1: ["guerreiro"],
      2: ["monge"],
      3: ["ninja"]
    };
  
    let answer = prompt("1 - mago, 2- guerreiro, 3- monge, 4- ninja");
  
    if (answer === "1") {
      hero.classe = "mago";
      return console.log("Você é um mago");
    } else if (answer === "2") {
      hero.classe = "guerreiro";
      return console.log("Você é um guerreiro");
    } else if (answer === "3") {
      hero.classe = "monge";
      return console.log("Você é um monge");
    } else if (answer === "4") {
      hero.classe = "ninja";
      return console.log("Você é um ninja");
    } else {
      console.log("Opção inválida.");
      return;
    }
  }
  

  
choice(hero);
// mago.attack()
// guerreiro.attack()
// monge.attack()
// ninja.attack()

//*! VOLTAR PARA CRIAR A FUNÇÃO DE AÇÕES ONDE O JOGADOR PODE ESCOLHER ATACAR, COMER OU DORMIR