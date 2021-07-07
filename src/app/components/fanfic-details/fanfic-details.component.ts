import { Component, OnInit } from '@angular/core';
import {Fanfic} from "../../models/fanfic.model";
import {FanficService} from "../../_services/fanfic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fanfic-details',
  templateUrl: './fanfic-details.component.html',
  styleUrls: ['./fanfic-details.component.css']
})
export class FanficDetailsComponent implements OnInit {

  currentFanfic: Fanfic = {
    title: '',
    description: '',
    fullpost: '',
    tag:'',
    fandom: ''

  };
  message = '';

  constructor(
    private fanficService: FanficService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
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



  updateFanfic(): void {
    this.message = '';

    this.fanficService.update(this.currentFanfic.id, this.currentFanfic)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This fanfic was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteFanfic(): void {
    this.fanficService.delete(this.currentFanfic.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/fanfics']);
        },
        error => {
          console.log(error);
        });
  }
}
