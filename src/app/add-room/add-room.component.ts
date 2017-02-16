import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  rooms: FirebaseListObservable<any>;
  roomVal: string = '';
  
  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }
  addRoom(roomName: string, description: string) {
    this.rooms.push({ creator: 'Somebody', 
                     description: description || 'About something',
                     name: roomName,
                     tags: 'tag2',
                     timestamp: '1234567283'
                    });
    this.roomVal = '';
  }


  ngOnInit() {
  }

}



