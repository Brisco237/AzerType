const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !","La vie,l'univers et le reste", "Merci pour le poisson"]

function afficherResultat(score, nombreDeMots){
    let spanScore = document.querySelector(".zoneScore span")
    let afficherScore = `${score} / ${nombreDeMots}`
    spanScore.textContent = afficherScore
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