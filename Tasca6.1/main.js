contador = 0
primeraCarta;
segonaCarta;
function numeroCartes() {
    cartes = [1,2,3,3,2,1]
    let contador = 0;
    cartes.forEach(e => { 
        tauler.innerHTML += `<p onclick="p(this)"> Carta ${e} </p>`;
    });  
};
function p(e){
    if (contador == 0) {
        primeraCarta = e.id;
        contador++;
    } else if (contador == 1){
        segonaCarta = e.id;
        contador++;
    } else if (contador == 2) {
        if (primeraCarta == segonaCarta) {
            alert('son iguals')
        } else {
            alert('has perdut')
        }
    }
}