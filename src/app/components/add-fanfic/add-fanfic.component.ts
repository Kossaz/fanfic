import { Component, OnInit } from '@angular/core';
import { Fanfic} from 'src/app/models/fanfic.model';
import { FanficService } from 'src/app/_services/fanfic.service';


@Component({
  selector: 'app-add-fanfic',
  templateUrl: './add-fanfic.component.html',
  styleUrls: ['./add-fanfic.component.css']
})
export class AddFanficComponent implements OnInit {
    fanfic: Fanfic = {
    title: '',
    description: '',
    fullpost: '',
    tag: '',
    fandom: ''
  };
  submitted = false;

  constructor(private fanficService: FanficService) { }

  ngOnInit(): void {
  }

  saveFanfic(): void {
    const data = {
      title: this.fanfic.title,
      description: this.fanfic.description,
      fullpost: this.fanfic.fullpost,
      tag: this.fanfic.tag,
      fandom: this.fanfic.fandom

    };

    this.fanficService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFanfic(): void {
    this.submitted = false;
    this.fanfic = {
      title: '',
      description: '',
      fullpost: '',
      tag: '',
      fandom: ''
    };
  }
}
