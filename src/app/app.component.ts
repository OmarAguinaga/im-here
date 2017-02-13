import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
/*
* AngularFire is needed as the primary AngularFire member.
* AuthProviders and AuthMethods are both used for Firebase authentication.
* And FirebaseListObservable allows us to fetch the chat messages.
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  /**
  * @desc This helps fetch the rooms from Firebase
  * @Type FirebaseListObservable 
  **/
  rooms: FirebaseListObservable<any>;
  // name: any;
  // msgVal: string = '';
  title = 'app works!';

  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }
}

