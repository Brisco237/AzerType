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
let listeProposition = listeMots

zoneProposition.innerHTML = listeMots[i]
btnValiderMot.addEventListener("click", () => {
    if(inputEcriture.value === listeProposition[i]){
        score++
    }
    i++
    zoneScore.innerHTML = score + " / " + listeProposition.length
    inputEcriture.value = ""
    if(listeProposition[i] === undefined){
        zoneProposition.innerHTML = "Le jeu est fini !"
        btnValiderMot.disabled = true
    }else{
        zoneProposition.innerHTML = listeProposition[i]
    }
})

let listeBtnRadio = document.querySelectorAll("input[type='radio']")
for(let j = 0; j < listeBtnRadio.length; j++){
    listeBtnRadio[j].addEventListener("change", (e) => {
        if(e.target.value === "1"){
            listeProposition = listeMots
        }else{
            listeProposition = listePhrases
        }
        zoneProposition.innerHTML = listeProposition[i]
        zoneScore.innerHTML = score + " / " + listeProposition.length
    })
}

let btnPartagerScore = document.getElementById("btnPartagerScore")
let sectionPartageScore = document.querySelector(".section-partagescore")
let btnFermerPopup = document.getElementById("fermerpopup")
let form = document.querySelector("form")

btnPartagerScore.addEventListener("click", () => {
    sectionPartageScore.classList.remove('section-partagescore')
})

btnFermerPopup.addEventListener("click", () => {
    sectionPartageScore.classList.add('section-partagescore')
})

form.addEventListener("submit", () => {
    preventDefault()
})