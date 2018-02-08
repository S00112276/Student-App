import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DiaryEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diary-entry',
  templateUrl: 'diary-entry.html',
})
export class DiaryEntryPage {
  entry;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
      this.entry = this.params.get('entry');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
