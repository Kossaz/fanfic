import { Component, OnInit } from '@angular/core';
import { Post} from 'src/app/models/post.model';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.css',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    const data = {
      title: this.post.title,
      description: this.post.description
    };

    this.postService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      description: '',
      published: false
    };
  }
}
