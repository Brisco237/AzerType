const listeMots = ["Cachalot", "Pétunia", "Serviette"]

function afficherProposition(proposition){
    let divProposition = document.querySelector(".zoneProposition")
    divProposition.innerText = proposition
}

function lancerJeu(){
    let score = 0
    let nombreDeMots = 0

    let divProposition = document.querySelector(".zoneProposition")
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0
    afficherProposition(listeMots[i])
    btnValiderMot.addEventListener("click", () => {
        afficherProposition(listeMots[i])
        i++
        inputEcriture.value = ""
        if(listeMots[i] === undefined){
            afficherProposition("Jeu terminé !")
            btnValiderMot.disabled = true
        }
    })
}

lancerJeu()

