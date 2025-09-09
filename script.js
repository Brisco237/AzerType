const listeMots = ["Python","Javascript","Html"]

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
    if(inputEcriture.value === listeMots[i]) {
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