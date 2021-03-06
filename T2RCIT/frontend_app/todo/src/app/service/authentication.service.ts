import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  constructor() { 
   
  } 
  authenticate(username,password){
    if(username==="nirmal" && password==="123"){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }
}
