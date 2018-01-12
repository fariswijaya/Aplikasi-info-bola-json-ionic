import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageServiceProvider {
 datas;
 items;
  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }

  load(){
    if (this.datas) {
      return Promise.resolve(this.datas);
    }
    
    return new Promise(resolve => {
      this.http.get('https://stark-crag-90218.herokuapp.com/').subscribe(data => {
        resolve(data);
        console.log(data);
        
      },err =>{
        console.log(err);
      });
    });

  }

}
