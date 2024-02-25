import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user : any;
  trashs : any[] = [];


  constructor(private http:HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/api/trash/all').subscribe({
      next: (data) => {
        this.trashs = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
