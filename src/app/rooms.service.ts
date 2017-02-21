import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RoomsService {

  /**
  * @desc This helps fetch the rooms from Firebase
  * @Type FirebaseListObservable 
  **/
  rooms: FirebaseListObservable<any>;

  /**
   * @description variables fro clearing immput in addRoom()
   * @type string
   */
  roomValue: string = '';
  descriptionValue: string = '';

  timestamp;

  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }

  getRooms(){
    return this.rooms;
  }

  addRoom(roomName: string, description: string) {
    this.timestamp =  new Date().getTime();
    this.rooms.push({ creator: 'Somebody', 
                     description: description || 'About something',
                     name: roomName,
                     tags: 'tag2',
                     timestamp: this.timestamp
                    });
    this.roomValue = '';
    this.descriptionValue = '';
  }

}
