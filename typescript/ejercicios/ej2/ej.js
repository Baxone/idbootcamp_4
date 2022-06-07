// un programa en typescript que reciba una cadena de caracteres y me la devuelva al reves.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//juan -> nauj
function reverseString(pWord) {
    //convertir el string en array y aplicarle reverse
    var arrString = pWord.split("");
    var reverseArray = __spreadArray([], arrString, true).reverse();
    return reverseArray.join("");
}
console.log(reverseString('juanan'));
