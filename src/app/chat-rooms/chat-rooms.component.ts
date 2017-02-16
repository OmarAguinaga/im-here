import { Component, OnInit } from '@angular/core';
/*
* AngularFire is needed as the primary AngularFire member.
* AuthProviders and AuthMethods are both used for Firebase authentication.
* And FirebaseListObservable allows us to fetch the chat messages.
*/
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css']
})
export class ChatRoomsComponent implements OnInit {


  /**
  * @desc This helps fetch the rooms from Firebase
  * @Type FirebaseListObservable 
  **/
  rooms: FirebaseListObservable<any>;
  // name: any;
  // msgVal: string = '';
  // title = 'app works!';

  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }

  ngOnInit() {
  }

}
