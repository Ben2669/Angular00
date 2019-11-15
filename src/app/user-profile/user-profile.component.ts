import { Component, OnInit } from '@angular/core';
import { User } from '../userProfile'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isShow = false;

  constructor() { }

  ngOnInit() {
  }

  showAge() {
    this.isShow = !this.isShow;
  }

}
