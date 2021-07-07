import { Component, OnInit } from '@angular/core';
import { Fanfic } from 'src/app/models/fanfic.model';
import { FanficService } from 'src/app/_services/fanfic.service';

@Component({
  selector: 'app-fanfics-list',
  templateUrl: './fanfics-list.component.html',
  styleUrls: ['./fanfics-list.component.css']
})
export class FanficsListComponent implements OnInit {

  fanfics?: Fanfic[];
  currentFanfic: Fanfic = {};
  currentIndex = -1;
  title = '';


  constructor(private fanficService: FanficService) { }

  ngOnInit(): void {
    this.retrieveFanfics();
     }

  retrieveFanfics(): void {
    this.fanficService.getAll()
      .subscribe(
        data => {
          this.fanfics = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFanfics();
    this.currentFanfic = {};
    this.currentIndex = -1;
  }

  setActiveFanfic(fanfic: Fanfic, index: number): void {
    this.currentFanfic = fanfic;
    this.currentIndex = index;
  }

  removeAllFanfics(): void {
    this.fanficService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentFanfic = {};
    this.currentIndex = -1;

    this.fanficService.findByTitle(this.title)
      .subscribe(
        data => {
          this.fanfics = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
