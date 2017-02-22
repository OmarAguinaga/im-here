import { Component, OnInit } from '@angular/core';
/*
* AngularFire is needed as the primary AngularFire member.
* AuthProviders and AuthMethods are both used for Firebase authentication.
* And FirebaseListObservable allows us to fetch the chat messages.
*/
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

import {RoomsService} from 'app/services/rooms.service';
@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css']
})
export class ChatRoomsComponent implements OnInit {

  constructor(public roomsService: RoomsService) {
    
  }

  chatRoomClicked(room){
    console.log(room);
  }

  ngOnInit() {
  }

}
