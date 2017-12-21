import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { AddReminderPage } from '../add-reminder/add-reminder';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myModal: any;
  reminders = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.loadReminders();
  }

  loadReminders() {
    if (window.localStorage.getItem('Reminders') != null) {
      this.reminders = JSON.parse(window.localStorage.getItem('Reminders'));
      console.log(this.reminders);
    }
  }

  showModal() {
    this.myModal = this.modalCtrl.create('AddReminderPage');
    this.myModal.present();
  }

  removeReminder(reminder) {
    console.log("Called");
    if (window.localStorage.getItem('Reminders') != null) {
      this.reminders = JSON.parse(window.localStorage.getItem('Reminders'));
      var filteredList = this.reminders.filter(item => {
        return item.Title != reminder.Title
      })
      this.reminders = filteredList;
      console.log(this.reminders);
      window.localStorage.setItem('Reminders',JSON.stringify(this.reminders));
    }
  }

}


