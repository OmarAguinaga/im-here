import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { HeaderComponent } from './header/header.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ShowMessagesComponent } from './show-messages/show-messages.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBeUHXOQpa2ca4xjHZBQI3yYm19oVrt2zE",
  authDomain: "im-here-12187.firebaseapp.com",
  databaseURL: "https://im-here-12187.firebaseio.com",
  storageBucket: "im-here-12187.appspot.com",
  messagingSenderId: "546302365067"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomsComponent,
    HeaderComponent,
    AddRoomComponent,
    ShowMessagesComponent
  ],
  imports: [
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
