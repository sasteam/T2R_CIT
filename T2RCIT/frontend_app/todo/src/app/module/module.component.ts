import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  messageFromServiceInModule:string;
  searchData(){
    this.router.navigate(['searchData']);

  }
 
}
