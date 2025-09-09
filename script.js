const listeMots = ["Python","Javascript","Html"]

// Récupération des éléments du DOM
let btnValiderMot = document.getElementById("btnValiderMot")
let inputEcriture = document.getElementById("inputEcriture")
let zoneScore = document.querySelector(".zoneScore span")
let zoneProposition = document.querySelector(".zoneProposition")

// Essayez d'afficher les élements récupérés
let i = 0
let score = 0
zoneProposition.innerHTML = listeMots[0]
btnValiderMot.addEventListener("click", ()=>{
    if(inputEcriture.value === listeMots[i]){
        score++
    }
    zoneScore.innerHTML = score + " / " + listeMots.length
    inputEcriture.value = ""
})