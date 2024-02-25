import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  title = "";
  content = "";
  comments : any[] = [];

  user: any;


  ngOnInit() {
    this.getComments();
  }

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getComments() {
    this.http.get('http://localhost:3000/api/comment/all').subscribe(
      {
        next: (data: any) => {
          this.comments = data;
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )
  }

  addComment() {
    const data = {
      title: this.title,
      author: this.user.name,
      content: this.content
    }

    this.http.post('http://localhost:3000/api/comment/create', data).subscribe(
      {
        next: (data: any) => {
          this.title = "";
          this.content = "";
          this.getComments();
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )



  }
}
