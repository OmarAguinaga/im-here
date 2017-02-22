import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import {RoomsService} from 'app/services/rooms.service';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
  providers: [RoomsService]
})
export class AddRoomComponent implements OnInit {

  constructor(public roomsService: RoomsService) {
    
  }

  ngOnInit() {
  }

}



