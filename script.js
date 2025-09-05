let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let reponseUser = prompt("Quel est le premier mot du tableau ?")

if(reponseUser === listeMots[0]){
    score += 1
    console.log("Bravo ! Votre score est de " + score)
}else{
    console.log("Dommage ! Votre score est de " + score)
}

console.log(score)