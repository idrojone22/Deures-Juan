function nom() {
    let nomUsuari = prompt('nombre de usuario')
    
    if (nomUsuari == 'Toni') {
      pantalla.innerHTML = `${nomUsuari}, eres un CRACK!`
    } else {
      pantalla.innerHTML = `Hola ${nomUsuari}, em sap mal, però Toni és més crack que tu...`
    }
}

