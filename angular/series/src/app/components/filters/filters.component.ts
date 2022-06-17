import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  arrChannels: string[] = [];
  activate: boolean = true;
  constructor(
    private seriesService: SeriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arrChannels = this.seriesService.getAllChannels()
  }

  ngDoCheck() {
    let path = window.location.pathname;
    this.activate = (path.includes('personaje')) ? false : true;
  }

  getChannel($event: any) {
    let channelName: string = $event.target.value;
    if (channelName === 'all') {
      this.router.navigate(['/series'])
    } else {
      this.router.navigate(['/canal', channelName])
    }
    $event.target.value = 'all';
  }

}
