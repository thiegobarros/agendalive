import { Component, OnInit } from '@angular/core';
import { LiveService } from '../../../shared/service/live.service';


@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  peoples:any
  constructor(private liveService:LiveService) { }

  ngOnInit(): void {
    this.liveService.getPeoples().subscribe(
      response => {
        this.peoples = response.results
      }
    )
  }

}
