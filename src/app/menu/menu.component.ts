import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}

const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', component: UserProfileComponent },
];

export { ROUTES }

