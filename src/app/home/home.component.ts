import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Fanfic} from "../models/fanfic.model";
import { FanficService } from 'src/app/_services/fanfic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  content?: string;
  fanfics?: Fanfic[];
  currentFanfic: Fanfic = {};
  currentIndex = -1;
  title = '';

  constructor(private userService: UserService,private fanficService: FanficService) {
  }

  ngOnInit(): void {
    this.retrieveFanfics();
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );



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

