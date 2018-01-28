import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  username = '';

  constructor(public navCtrl: NavController, private socket: Socket) {

  }

  joinChat() {
    this.socket.connect();
    this.socket.emit('retrieve-history')
    this.socket.emit('set-username', this.username)
    this.navCtrl.push('ChatRoomPage', { username: this.username });
  }

}