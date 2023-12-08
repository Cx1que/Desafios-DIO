const prompt = require("prompt-sync")();

let userName = getFirstName("Caique Rodrigues da Silva")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
  let firstName = name.split(" ")[0]
  return firstName
}


