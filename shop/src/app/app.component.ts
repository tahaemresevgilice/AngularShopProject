import { AccountService } from './login/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private accountService:AccountService){}
  title = 'shop';
  isLoggedin(){
    return this.accountService.isLogged();
  }
  logOut(){
    this.accountService.logOut();
  }
}
