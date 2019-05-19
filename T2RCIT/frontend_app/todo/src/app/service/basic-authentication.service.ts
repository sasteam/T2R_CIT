import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ApplicationDataService } from './data/application-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService{
  errorMessage: any;
  messageFromService: any;

  constructor(private appService:ApplicationDataService,
    private http:HttpClient
    ) { 
   
  } 
  // basicAuthenticate(username,password){
   
  //   this.executeBasicAuthService(username,password).subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorMessage(error)
  //     );
  //     if(username==="nirmal" && password==="123"){
  //       sessionStorage.setItem('authenticatedUser',username);
  //       return true;
  //     }
  //     return false;
  //   }
   
  

  // isUserLoggedIn(){
  //   let user=sessionStorage.getItem('authenticatedUser');
  //   return !(user===null)
  // }
  // logout(){
  //   sessionStorage.removeItem('authenticatedUser')
  // }
  

// handleErrorMessage(error){
//   this.errorMessage=error;
// }
// handleSuccessfulResponse(response){
//   this.messageFromService=response;
  
//   console.log(response)
// }
executeBasicAuthService(username,password){
  let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password)
  let headers=new HttpHeaders({
    Authorization:basicAuthenticationString
  })
  return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).pipe(
        map(
          data=>{
            sessionStorage.setItem('authenticatedUser',username);
            sessionStorage.setItem('token',basicAuthenticationString);

            return data;
          }
        )
  
  )
}

executeJWTAuthService(username,password){
 
  return this.http.post<any>(`${API_URL}/authenticate`,{
  username,
  password}).pipe(
        map(
          data=>{
            sessionStorage.setItem('authenticatedUser',username);
            sessionStorage.setItem('token',`Bearer ${data.token}`);

            return data;
          }
        )
  
  )
}


}
export class AuthenticationBean{
   constructor(public message:string){}
}