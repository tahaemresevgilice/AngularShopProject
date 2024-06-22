import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private accountService:AccountService) {}
  model:User = new User();

  ngOnInit() {

  }
  login(form:NgForm){
    this.accountService.login(this.model);
  }
}
