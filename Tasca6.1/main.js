let contador = 0;
let primeraCarta;
let segonaCarta;
function numeroCartes() {
    cartes = [1,2,3,3,2,1];
    cartes.forEach(e => { 
        tauler.innerHTML += `<p onclick="p(this)"> Carta ${e} </p>`;
    });  
};
function p(e){
    if (contador == 0) {
        primeraCarta = e.textContent;
        alert(`Has apretat la carta ${e.textContent}`);
        contador++;
    } else if (contador == 1) {
        segonaCarta = e.textContent;
        alert(`Has apretat la carta ${e.textContent}`);
        contador++;
    } 
    if (contador == 2) {
        if (primeraCarta == segonaCarta) {
            alert('son iguals')
            contador = 0;
        } else {
            alert('no son iguals');
            contador = 0;
        };
    };
};