import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarStrings'
})
export class RecortarStringsPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log(args);
    //contar caracteres
    // let result = `${value.substring(0, 20)}...`;
    // return result;

    //opcion 2 contar palabras
    // let arr = value.split(" ");
    // arr = arr.slice(0, 20);
    // return `${arr.join(" ")}...`;
    //opcion3 en un sola linea

    return `${value.split(" ").slice(0, args[0]).join(" ")}${args[1]}`;

  }

}
