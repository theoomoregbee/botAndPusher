import { Component, OnInit } from '@angular/core';
import { IChat } from '../interfaces/ichat';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chats: IChat[] = [];

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    // subscribe to pusher's event
    this._chatService.getChannel().bind('chat', data => {
      this.chats.push(data);
    });
  }

}
