import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-panic',
  templateUrl: 'panic.html'
})
export class PanicPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

}
