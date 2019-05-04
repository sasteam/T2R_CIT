import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ApplicationName{
  constructor(public appName:string){};
}
@Injectable({
  providedIn: 'root'
})

export class ApplicationDataService {
  //responseType;
  constructor(private http:HttpClient) { }
  getApplicationNameService(){
    return this.http.get('http://localhost:8080/appName',{responseType: 'text'});
  }

  loginService(name){
    return this.http.get(`http://localhost:8080/login/${name}`,{responseType: 'text'});
  }
}
