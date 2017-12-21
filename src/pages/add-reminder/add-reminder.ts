import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html',
})
export class AddReminderPage {

  reminders = [];

  reminder : any = {
    reminderTitle : "",
    reminderDescription : "",
    reminderDate : {
      month: '1990-02-19',
      timeStarts: '07:43',
      timeEnds: '1990-02-20'
    },
    reminderReadNews : false
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,private storage: Storage) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');
  }

  

  dismiss() {
    this.viewCtrl.dismiss();
    window.location.reload();
  }

  saveReminder(){
    var saveReminder = {
      Title : this.reminder.reminderTitle,
      Description : this.reminder.reminderDescription,
      Date : this.event.month,
      Time : this.event.timeStarts,
      ReadNews : this.reminder.reminderReadNews
    }
    var currentReminders = [];

    if(window.localStorage.getItem('Reminders') == null){
      console.log("Not Found");
    }
    else{
      currentReminders = JSON.parse(window.localStorage.getItem('Reminders'));
    }
    currentReminders.push(saveReminder);
    window.localStorage.setItem('Reminders',JSON.stringify(currentReminders));
    this.dismiss();
  }


}
