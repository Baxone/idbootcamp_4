let frase = 'La ruta nos aporto otro paso natural'


function isPalindromo(pString) {

    let palindromo = false;

    const sinEspacios = pString.replaceAll(" ", "").toLowerCase();
    //const sinEspacios = pString.replace(/[ ]/g, '').toLowerCase();

    const arrayCharacters = sinEspacios.split("");
    const reverseCharacters = [...arrayCharacters].reverse();

    const stringCharacters = arrayCharacters.join("")
    const stringReverse = reverseCharacters.join("")

    if (stringCharacters === stringReverse) {
        return true;
    }
    return palindromo;
}

console.log(isPalindromo(frase))