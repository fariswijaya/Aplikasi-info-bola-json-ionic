import { MessageServiceProvider } from './../../providers/message-service/message-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MessageServiceProvider]
})
export class HomePage {

  url:string;
  data:string;

  constructor(public navCtrl: NavController, public mgs: MessageServiceProvider){

  }

  ionViewWillEnter(){
    this.loadData();
  }

  loadData(){
    this.mgs.load()
    .then(data => {
      this.data = data;
    });    
  }
}