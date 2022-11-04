import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  reg="login()";
  // login(){
  //   this.reg="login()";
  // }
  // signup(){
  //   this.reg="signup()";
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
