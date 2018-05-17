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
  message: string;
  sending: boolean;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    // subscribe to pusher's event
    this._chatService.getChannel().bind('chat', data => {
      if (data.email === this._chatService.user.email) {
        data.isMe = true;
      }
      this.chats.push(data);
    });
  }

  sendMessage(message: string) {
    this.sending = true;
    this._chatService.sendMessage(message)
      .subscribe(resp => {
        this.message = undefined;
        this.sending = false;
      }, err => {
        this.sending = false;
      } );
  }

}
