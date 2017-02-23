import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import {RoomsService} from 'app/services/rooms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public roomsService: RoomsService) {
    
  }
  
  ngOnInit() {
  }

}
