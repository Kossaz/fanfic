import { Component, OnInit } from '@angular/core';
import {Fanfic} from "../../models/fanfic.model";
import {FanficService} from "../../_services/fanfic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentFanfic: Fanfic = {
    title: '',
    description: '',
    fullpost: '',
    tag:'',
    fandom: ''

  };

  constructor(
    private fanficService: FanficService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getFanfic(this.route.snapshot.params.id);
  }

  getFanfic(id: string): void {
    this.fanficService.get(id)
      .subscribe(
        data => {
          this.currentFanfic = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});


  }
}
