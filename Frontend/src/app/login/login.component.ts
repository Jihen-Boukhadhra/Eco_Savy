import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  message = '';
  status = '';


  constructor(private http : HttpClient) { }

  login(){
    const data = {
      email : this.email,
      password : this.password
    }

    this.http.post('http://localhost:3000/api/auth/login', data).subscribe(
      {
        next: (data: any) => {
          this.message = data.message;
          this.status = 'success';
          localStorage.setItem('user', JSON.stringify(data));
          window.location.href = '/dashboard';
        },
        error: (error: any) => {
          this.message = error.error.message;
          this.status = 'error';
        }
      }
    )
    
    

    
  }
  

}
