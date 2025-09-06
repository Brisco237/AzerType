const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !","La vie,l'univers et le reste", "Merci pour le poisson"]
let score = 0

function choisirPhrasesOuMots() {
    let choix = prompt("Voulez-vous des mots ou des phrases ? (mots/phrases)")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Voulez-vous des mots ou des phrases ? (mots/phrases)")
    }
}

if(choix === "mots"){
    for(let i = 0; i < listeMots.length; i++){
        let reponseUser = prompt("Entrez un mot :")
        if(reponseUser === listeMots[i]){
            console.log("bravo")
            score += 1
        }
    }
    console.log("votre score est de " + score + "/" + listeMots.length)
}else{
    for (let i = 0; i < listePhrases.length; i++) {
        let reponseUser = prompt("Entrez une phrase :")
        if (reponseUser === listePhrases[i]) {
            console.log("bravo")
            score += 1
        }
    }
    console.log("votre score est de " + score + "/" + listePhrases.length)
}
function afficherResultat(resultat, nombreDeMots){

}

