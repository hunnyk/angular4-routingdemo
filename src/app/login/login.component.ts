import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoginSubmit(data){
    //console.log(data.value);
    localStorage.setItem("email",data.value.email);
    console.log(localStorage.getItem("email"));
  }

}
