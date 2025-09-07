const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !","La vie,l'univers et le reste", "Merci pour le poisson"]


function lancerJeu(){
    let score = 0
    let nombreDeMots = 0

    let btnValiderMot = document.getElementById("btnValiderMot")
    btnValiderMot.addEventListener("click", () => {
        console.log("J'ai cliqué !")
    })

    let inputEcriture = document.getElementById("inputEcriture")
    inputEcriture.addEventListener("input", () => {
        console.log(inputEcriture.value)
    })

    afficherResultat(score, nombreDeMots)
}

lancerJeu()

