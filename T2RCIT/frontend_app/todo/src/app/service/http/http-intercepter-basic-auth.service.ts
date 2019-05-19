import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: import("@angular/common/http").HttpHandler) {

    // let username = 'nirmal'
    // let password = '123'
    // let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password)
    let authenticationToken=this.authenticationService.getAuthenticatedToken();
    let username=this.authenticationService.getAuthenticatedUser();
  if(authenticationToken && username){
      req = req.clone({
         setHeaders: {
            Authorization: authenticationToken
       }
      })
    }
    return next.handle(req);
  }

  constructor(private authenticationService:AuthenticationService) { }
}
