import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RoomsService {

  /**
  * @desc This helps fetch the rooms from Firebase
  * @Type FirebaseListObservable 
  **/
  rooms: FirebaseListObservable<any>;

  /**
  * @desc This helps fetch the messages from Firebase
  * @Type FirebaseListObservable 
  **/
  messages: FirebaseListObservable<any>;

  /**
  * @desc This helps fetch the messages from Firebase
  * @Type FirebaseListObservable 
  **/
  messagesById: FirebaseListObservable<any>;

  /**
   * @description variables fro clearing immput in addRoom()
   * @type string
   */
  roomValue: string = '';
  descriptionValue: string = '';

  timestamp;

  roomId: Subject<any>;
  id: string;

  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    //this.messages = af.database.list('/messages');

    this.roomId = new Subject();
    this.messagesById = af.database.list('/messages', {
      query: {
        orderByChild: 'roomID',
        equalTo: this.roomId
      }
    });
    this.messages = af.database.list('/messages');
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

  getMessages(){
    return this.messages;
  }

  getMessagesById(id:string){
     this.roomId.next(id); 
  }

}
