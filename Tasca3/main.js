function num() {
    let n = prompt('dime un numero')

    for (let i = 0; i <= n; i++) {
        salutacions.innerHTML += `<p>Hola ${i}</p>`
    }
}

