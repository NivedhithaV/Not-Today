import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isConfetti = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showConfetti() {
    console.log('Confetti');
    this.isConfetti = true;
    setTimeout(() => {
      this.isConfetti = false;
    }, 3000);
  }
}
