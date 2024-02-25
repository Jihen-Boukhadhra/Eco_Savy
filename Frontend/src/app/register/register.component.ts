import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  accountType = '';

  message = '';

  constructor(private http : HttpClient) { }



  register(){
    const data = {
      name : this.fullName,
      email : this.email,
      password : this.password,
      type : this.accountType
    }

    if (this.password !== this.confirmPassword){
      this.message = 'Passwords do not match';
      return;
    }

    this.http.post('http://localhost:3000/api/auth/register', data).subscribe(
      {
        next: (data: any) => {
          console.log(data);
          window.location.href = '/login';
        },
        error: (error: any) => {
          this.message = error.error.message;
          console.log(error);
        }
      }
    )

    
    
  }

}
