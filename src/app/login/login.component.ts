import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exform: FormGroup = new FormGroup({});
  constructor(private route: Router, private login: LoginService) {

  }

  ngOnInit(): void {

    this.exform = new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  loginData() {
    if (this.exform.valid)
      console.log("credentials", this.exform.value);
    this.login.saveusers(this.exform.value).subscribe((result: any) => {
      console.log('sucess', result)
      this.route.navigate(['header']);
    },
      (err: any) => {
        console.log('error', err)
        this.route.navigate(['login'])
      });

  }

}
