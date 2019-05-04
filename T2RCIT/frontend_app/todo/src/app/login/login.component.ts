import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ApplicationDataService } from '../service/data/application-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authenticateService: AuthenticationService, private applicationDataService: ApplicationDataService) { }
  username = '';
  password = '';
  errorMessage = 'invalid credentials'
  invalidLogin = false
  messageFromService='';
  errorFromService='';
  ngOnInit() {
  }

  handleLogin() {
    if (this.authenticateService.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.getWelcomeUserName(this.username);
      this.router.navigate(['module'])
    } else {
      this.invalidLogin = true
    }
    console.log(this.username + " " + this.password)
  }

  goHome() {
    this.router.navigate(['home'])
  }
  getWelcomeUserName(name) {
    //this.getAppNameService.getApplicationNameService().subscribe();
    this.applicationDataService.loginService(name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    );

  }
    handleErrorMessage(error){
      this.errorFromService = error;
    }
    handleSuccessfulResponse(response){
      this.messageFromService = response;
      console.log(response)
    }

  }
