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
  users = [];
  username = '';
  message = '';

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, private socket: Socket) {
    this.username = this.navParams.get('username');

    var testmessages = [];
    
    this.messages = this.getHistory(testmessages);

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

  // Track connected users
  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', data => {
        observer.next(data);
      });
    });
    return observable;
  }

  // Retrieve message history
  getHistory() 
  {
      this.messages =  this.socket.emit('retrieve-history', function (data) { this.messages = data;  } ).data; //Have to pass data from socket scope to app scope
      console.log(this.messages); 
    };



  // Disconnect from server
  ionViewWillLeave() {
    this.socket.disconnect();
  }

  // Send message
  sendMessage() {
    this.socket.emit('add-message', { text: this.message });
    this.message = '';
  }

  // Receive message
  getMessage() {
    let observable = new Observable(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      });
    });
    return observable;
  }

  // Notifications
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
