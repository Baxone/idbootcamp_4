import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any): string {

    if (value !== null && value !== undefined) {
      //tengo que sacar el nombre de la moneda y el simbolo y devolverlo en un string
      const moneda: any = Object.values(value)[0]
      return moneda.name + " - " + moneda.symbol

    }
    return "No tiene moneda";
  }

}
