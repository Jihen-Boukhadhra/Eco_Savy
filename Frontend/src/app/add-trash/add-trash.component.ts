import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './add-trash.component.html',
  styleUrls: ['./add-trash.component.css']
})
export class TrashComponent {
  type = '';
  biodegradable = false;
  recyclable = false;
  quantity = 0;

  message = '';

  constructor(private http:HttpClient) { }


  toggleHover(type : string) {
    this.type = type;
  }

  addTrash() {
    const data = {
      type : this.type,
      biodegradable : this.biodegradable,
      recyclable : this.recyclable,
      quantity : this.quantity,
      user : JSON.parse(localStorage.getItem('user') || '{}')._id
    }

    this.http.post('http://localhost:3000/api/trash/create', data).subscribe(
      {
        next: (data: any) => {
          this.message = "Thank you for your contribution!";

          //wait 3 seconds then redirect to dashboard
          setTimeout(() => {
            window.location.href = '/dashboard';
          }, 3000);



        },
        error: (error: any) => {
          this.message = error.error.message;
        }
      }
    )
  }


}
