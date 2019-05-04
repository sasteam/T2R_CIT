import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-modify-data',
  templateUrl: './modify-data.component.html',
  styleUrls: ['./modify-data.component.css']
})
export class ModifyDataComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }
  
  ngOnInit() {
  }

}
