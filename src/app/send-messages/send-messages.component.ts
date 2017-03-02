import { Component, OnInit } from '@angular/core';
import {RoomsService} from 'app/services/rooms.service';

@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.css']
})
export class SendMessagesComponent implements OnInit {

   constructor(public roomsService: RoomsService) {
    
  }

  ngOnInit() {
  }

}
