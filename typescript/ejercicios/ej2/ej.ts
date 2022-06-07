// un programa en typescript que reciba una cadena de caracteres y me la devuelva al reves.

//juan -> nauj

function reverseString(pWord: string): string {

    //convertir el string en array y aplicarle reverse

    let arrString: string[] = pWord.split("");
    let reverseArray: string[] = [...arrString].reverse();
    return reverseArray.join("");
}

console.log(reverseString('juanan'));



