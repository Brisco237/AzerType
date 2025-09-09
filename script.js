const listeMots = ["Python","Javascript","Html"]
const listePhrases = [
    "La lecture est le plus grand ferment de l'intellligence",
    "Chaque génération doit dans une relative opacité découvrir sa mission soit l'accomplir ou la trahir",
    "Formez vous et armez vous des sciences jusqu'au dent et arrachez votre patrimoine culturel"
]

// Récupération des éléments du DOM
let btnValiderMot = document.getElementById("btnValiderMot")
let inputEcriture = document.getElementById("inputEcriture")
let zoneScore = document.querySelector(".zoneScore span")
let zoneProposition = document.querySelector(".zoneProposition")


// Essayez d'afficher les élements récupérés
let score = 0
let i = 0

zoneProposition.innerHTML = listeMots[i]
btnValiderMot.addEventListener("click", () => {
    if(inputEcriture.value === listeMots[i]){
        score++
    }
    i++
    zoneScore.innerHTML = score + " / " + listeMots.length
    inputEcriture.value = ""
    if(listeMots[i] === undefined){
        zoneProposition.innerHTML = "Le jeu est fini !"
        btnValiderMot.disabled = true
    }else{
        zoneProposition.innerHTML = listeMots[i]
    }
})