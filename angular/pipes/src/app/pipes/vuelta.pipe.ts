import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuelta'
})
export class VueltaPipe implements PipeTransform {

  transform(value: any): string {
    if (typeof value === 'string') {
      //opcion 1
      // let arr = value.split("")
      // let arrRev = [...arr].reverse()
      // let result = arrRev.join("");
      // return result;
      //opcion 2 pro
      return value.split('').reverse().join('');
    }
    return 'Esto no es un cadena de caracter zoquete';
  }

}
