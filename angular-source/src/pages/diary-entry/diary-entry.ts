import { Component } from '@angular/core';
import { IonicPage, Platform, NavParams, ViewController } from 'ionic-angular';

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
  entryType: string[] = [
    'https://drslash.com/wp-content/uploads/2014/07/Notes.png', 
    'https://image.flaticon.com/icons/svg/432/432413.svg', 
    'https://image.flaticon.com/icons/svg/235/235248.svg',
    'https://image.flaticon.com/icons/svg/236/236816.svg',
    'https://image.flaticon.com/icons/svg/236/236830.svg'
  ];

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
