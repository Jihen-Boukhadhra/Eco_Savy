import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.css']
})
export class ReceiversComponent {
  receivers : any[] = [];


  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/api/auth/all').subscribe({
      next: (data) => {
        data.filter((user: any) => {
          if (user.type === 'Receiver') {
            this.receivers.push(user);
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
