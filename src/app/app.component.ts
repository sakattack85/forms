import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 user=new User('','','','','');
  retrievedata(formdata){
this.user=formdata;
  }
}
