import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent {
  title = "";
  content = "";
  rapports : any[] = [];

  user: any;


  ngOnInit() {
    this.getRapports();
  }

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getRapports() {
    this.http.get('http://localhost:3000/api/rapport/all').subscribe(
      {
        next: (data: any) => {
          this.rapports = data;
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )
  }

  addRapport() {
    const data = {
      title: this.title,
      author: this.user.name,
      content: this.content
    }

    this.http.post('http://localhost:3000/api/rapport/create', data).subscribe(
      {
        next: (data: any) => {
          this.title = "";
          this.content = "";
          this.getRapports();
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )



  }

}
