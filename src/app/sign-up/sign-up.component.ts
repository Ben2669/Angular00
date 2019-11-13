import { Component, OnInit } from '@angular/core';
import { SignUp } from '../signUp';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUp: SignUp = {
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
