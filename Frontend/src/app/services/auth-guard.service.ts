import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (!!user == false){
      window.location.href = '/';
    }

    return !!user; 
  }
}
