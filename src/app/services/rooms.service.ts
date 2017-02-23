import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
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
  messagesById: FirebaseListObservable<any>;

  /**
   * @description variables fro clearing immput in addRoom()
   * @type string
   */
  roomValue: string = '';
  descriptionValue: string = '';

  timestamp;

  /**
   * @description stores room roomID
   * @type Subject
   */
  roomId: Subject<any>;
  roomName: string = '';

  name: any;
  displayName: String;

  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');

    this.roomId = new Subject();
    this.messagesById = af.database.list('/messages', {
      query: {
        orderByChild: 'roomID',
        equalTo: this.roomId
      }
    });
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }

  getRooms() {
    return this.rooms;
  }

  addRoom(roomName: string, description: string) {
    this.timestamp = new Date().getTime();
    this.rooms.push({
      creator: 'Somebody',
      description: description || 'About something',
      name: roomName,
      tags: 'tag2',
      timestamp: this.timestamp
    });
    this.roomValue = '';
    this.descriptionValue = '';
  }

  setCurrentRoom(room) {
    this.roomId.next(room.$key);
    this.roomName = room.name;
  }

  /**
   * @description Authentication methods: FacebookLogin / AnonymusLogin / login
   */
  FacebookLogin() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

  AnonymusLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }

  logout() {
    this.af.auth.logout();
    this.name = null;
  }

  getName() {
    if (this.name.auth.displayName) {
      return this.name.auth.displayName;
    }else{
      return 'Guest';
    }
  }
}
