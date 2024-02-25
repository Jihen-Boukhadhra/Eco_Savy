import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trash-list',
  templateUrl: './trash-list.component.html',
  styleUrls: ['./trash-list.component.css']
})
export class TrashListComponent {
  user : any;
  trashs : any[] = [];


  constructor(private http:HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getAllTrash(){
    this.http.get<any>('http://localhost:3000/api/trash/all').subscribe({
      next: (data) => {
        this.trashs = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  ngOnInit(): void {
    this.getAllTrash();
    
  }

  selectTrash(id : any){
    //update trash
    this.http.put<any>(`http://localhost:3000/api/trash/update/${id}`, {
      receiver: this.user._id
    }).subscribe({
      next: (data) => {
        console.log(data);
        this.getAllTrash();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
