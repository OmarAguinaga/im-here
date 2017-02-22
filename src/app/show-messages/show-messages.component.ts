import { Component, OnInit } from '@angular/core';
import {RoomsService} from 'app/services/rooms.service';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css'],
  providers: [RoomsService]
})
export class ShowMessagesComponent implements OnInit {

  constructor(public roomsService: RoomsService) {
    
  }

  ngOnInit() {
  }

}
