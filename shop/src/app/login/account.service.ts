import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user:User):boolean{
    if(user.userName=="taha"&&user.password=="12345"){
      this.loggedIn = true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    }
    return false;
  }
  isLogged(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
