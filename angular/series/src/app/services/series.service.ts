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

  /**
    * @memberof SeriesService
    * @author idBootcamps
    * @date 17/06/2022
    * @function getAllChannels()
    * @description Devuelve un array de string con todos los canales no repetidos
    * @returns {*}  {string[]}
  */
  getAllChannels(): string[] {
    let channels: string[] = this.arrSeries.map(serie => serie.canal);
    //quitar los canales repetidos
    channels = [...new Set(channels)];
    return channels;
  }

  /**
    * @memberof SeriesService
    * @author idBootcamps
    * @date 17/06/2022
    * @function getByChannel()
    * @description Devuelve un array de series filtrado por canal
    * @param {string} pChannel
    * @returns {*}  {Serie[]}
  */
  getByChannel(pChannel: string): Serie[] {
    return this.arrSeries.filter(serie => serie.canal === pChannel);
  }

  /**
   * @memberof SeriesService
   * @author idBootcamps
   * @date 17/06/2022
   * @function getSeasons()
   * @description Devuelve un array de series filtrado por canal
   * @param {string} pId
   * @returns {*}  {string[]}
 */
  getSeasons(pId: string): string[] | any {
    let idSerie = parseInt(pId);
    let result = this.arrSeries.find(serie => serie.id === idSerie);
    return result?.temporadas;
  }


}
