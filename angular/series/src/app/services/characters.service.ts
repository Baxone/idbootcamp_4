import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  arrCharacters: Character[] = [];
  constructor() {
    this.arrCharacters = PERSONAJES;
  }

  /**
    * @memberof CharactersService
    * @author idBootcamps
    * @date 16/06/2022
    * @function getAll()
    * @description Devuelve un array de personajes de series
    * @returns {*}  {Character[]}
  */
  getAll(): Character[] {
    return this.arrCharacters;
  }

  /**
    * @memberof CharactersService
    * @author idBootcamps
    * @date 16/06/2022
    * @function getById()
    * @description Devuelve un personaje por id
    * @param {number} pId
    * @returns {*}  {Character| any}
  */
  getById(pId: number): Character | any {
    return this.arrCharacters.find(character => character.id === pId);
  }

  /**
     * @memberof CharactersService
     * @author idBootcamps
     * @date 16/06/2022
     * @function getBySerieId()
     * @description Devuelve un personaje por id
     * @param {string} pId
     * @returns {*}  {Character[]}
   */
  getBySerieId(pId: string): Character[] {
    let idSerie = parseInt(pId);
    return this.arrCharacters.filter(character => character.serie === idSerie);
  }


}
