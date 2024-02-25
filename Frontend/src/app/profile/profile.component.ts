import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any;

  name = "";
  newpassword = "";
  confirmnewpassword = "";



  constructor(private http:HttpClient) {}


  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.name = this.user.name;



    this.http.get(`http://localhost:3000/api/auth/${this.user._id}`).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  updateProfile(){
    if (this.newpassword !== this.confirmnewpassword) {
      alert('Passwords do not match');
      return;
    }



    const data = {
      name: this.name,
      password: this.newpassword,
      role: this.user.role
    }

    this.http.put(`http://localhost:3000/api/auth/${this.user._id}`, data).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
        localStorage.setItem('user', JSON.stringify(this.user));
        window.location.href = '/profile';
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



}
