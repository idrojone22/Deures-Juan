function numeroCartes() {
    let n = prompt('Give me a number')
    let contador = 0
    tauler.innerHTML = ''

    for (let i = 1; i <= n; i++) {
        tauler.innerHTML += `<p> Carta ${i} </p>`
    }
    
    let p = document.querySelectorAll('p')
    p.forEach(e => {
        let prova = () => {
            e.style.background = 'lightgreen'
            e.innerHTML = 'P'
            contador++
            contador == n ?  setTimeout(() => {alert('Frena Moreno!')}, 200) : null
            e.removeEventListener('click', prova)
        }
        e.addEventListener('click', prova)
    })
}