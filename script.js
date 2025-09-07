const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !","La vie,l'univers et le reste", "Merci pour le poisson"]


function lancerJeu(){
    let score = 0
    let nombreDeMots = 0

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    btnValiderMot.addEventListener("click", () => {
        console.log("J'ai cliqué !")
    })

    afficherResultat(score, nombreDeMots)
}

lancerJeu()

