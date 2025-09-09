const listeMots = ["Python","Javascript","Html"]

// Récupération des éléments du DOM
let btnValiderMot = document.getElementById("btnValiderMot")
let inputEcriture = document.getElementById("inputEcriture")
let zoneScore = document.querySelector(".zoneScore span")
let zoneProposition = document.querySelector(".zoneProposition")

// Essayez d'afficher les élements récupérés
zoneProposition.innerHTML = listeMots[0]
let i = 0
let score = 0
btnValiderMot.addEventListener("click", ()=>{
    console.log(inputEcriture.value)
    if(inputEcriture.value === listeMots[i]){
        score++
    }
    i++
    zoneScore.innerHTML = score + " / "+ listeMots.length
    inputEcriture.value = ""
})