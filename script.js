const listeMots = ["Cachalot", "Pétunia", "Serviette"]

function lancerJeu(){
    let score = 0
    let nombreDeMots = 0

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0
    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)
        i++
    })

    afficherResultat(score, nombreDeMots)
}

lancerJeu()

