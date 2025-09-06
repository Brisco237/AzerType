const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !","La vie,l'univers et le reste", "Merci pour le poisson"]

function choisirPhrasesOuMots() {
    let choix = prompt("Voulez-vous des mots ou des phrases ? (mots/phrases)")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Voulez-vous des mots ou des phrases ? (mots/phrases)")
    }
    return choix
}

function afficherResultat(score, nombreDeMots){
    console.log("votre score est de " + score + "/" + nombreDeMots)
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        let reponseUser = prompt("Entrez une phrase :")
        if (reponseUser === listePropositions[i]) {
            console.log("bravo")
            score += 1
        }
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreDeMots = 0

    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nombreDeMots = listeMots.length
    }else{
        score = lancerBoucleDeJeu(listePhrases)
        nombreDeMots = listePhrases.length
    }

    afficherResultat(score, nombreDeMots)
}

lancerJeu()

let main = document.getElementById("main")

console.log(main)
