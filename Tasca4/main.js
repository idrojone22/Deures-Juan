function numeroCartes() {
    let n = prompt('Give me a number')
    tauler.innerHTML = ''

    for (let i = 0; i < n; i++) {
        tauler.innerHTML += `<p> Carta ${i} </p>`
    }
}