import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {

  arrCountries: Country[] = [];
  lat: number = 49.3107892;
  long: number = 2.3694177;
  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    //se puede gestionar una promesa tambien con then() cath() sin usar async await
    this.countriesService.getByRegion()
      .then(data => this.arrCountries = data)
      .catch(error => console.log(error))

  }

}
