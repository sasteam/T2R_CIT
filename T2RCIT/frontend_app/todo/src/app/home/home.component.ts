import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationDataService } from '../service/data/application-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   messageFromService:string='';
   errorMessage:string='';
  constructor(private router:Router,private getAppNameService:ApplicationDataService) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['login'])
  }
  getAppName(){
    //this.getAppNameService.getApplicationNameService().subscribe();
    this.getAppNameService.getApplicationNameService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
      );
  }
  handleErrorMessage(error){
    this.errorMessage=error;
  }
  handleSuccessfulResponse(response){
    this.messageFromService=response;
    console.log(response)
  }

}
