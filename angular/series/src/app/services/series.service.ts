import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private arrSeries: Serie[] = []
  constructor() {
    this.arrSeries = SERIES;
  }

  /**
   * @memberof SeriesService
   * @author idBootcamps
   * @date 16/06/2022
   * @function getAll()
   * @description Devuelve un array de series
   * @returns {*}  {serie[]}
 */
  getAll(): Serie[] {
    return this.arrSeries;
  }

  /**
    * @memberof SeriesService
    * @author idBootcamps
    * @date 16/06/2022
    * @function getById()
    * @description Devuelve una serie por id
    * @param {number} pId
    * @returns {*}  {serie| any}
  */
  getById(pId: number): Serie | any {
    return this.arrSeries.find(serie => serie.id === pId);
  }




}
