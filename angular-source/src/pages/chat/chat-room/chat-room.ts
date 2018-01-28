import { Socket } from 'ng-socket-io';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  messages = [];
  username = '';
  message = '';

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, private socket: Socket) {
    this.username = this.navParams.get('username');

    this.getMessage().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showtoast('user left: ' + user);
      } else {
        this.showtoast('user joined: ' + user);
      }
    });
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', data => {
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  sendMessage() {
    this.socket.emit('add-message', { text: this.message});
    this.message = '';
  }

  getMessage() {
    let observable = new Observable(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      });
    });
    return observable;
  }

  showtoast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top',
      cssClass: "toast"
    });
    toast.present();
  }

}
