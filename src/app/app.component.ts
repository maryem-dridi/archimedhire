import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Archimed Hire';
  constructor(public auth:AuthService) {
  }
  public signOut(){
    this.auth.signOut();
  }

  page:string="home";
  public changePage(page:string){
    console.log(page)
    this.page=page;
}
}
