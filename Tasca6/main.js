function numeroCartes() {
    let n = prompt ("Dime un numero");
    let contador = 0;
    tauler.innerHTML = "";

    for (let i = 1; i <= n; i++) {
        tauler.innerHTML += `<p> Carta ${i} </p>`;
    };

    let p = document.querySelectorAll("p");
    p.forEach(e => {
        let prova = () => {
            e.style.background = "lightgreen";
            contador++;
            contador == n ?  setTimeout(() => {alert("Frena Moreno!")}, 200) : null;
            e.removeEventListener("click", prova);
            e.addEventListener("click", prova1);
        };

        let prova1 = () => {
            e.style.background = "white";
            contador--;
            e.removeEventListener("click", prova1);
            e.addEventListener("click", prova);
        };
        e.addEventListener("click", prova);
    });
};