import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: any;
  constructor(private route: Router) { }



  ngOnInit(): void {

    this.signup = new FormGroup({
      "firstName": new FormControl(''),
      "lastName": new FormControl(''),
      "emailId": new FormControl(''),
      "mobileNumber": new FormControl('')
    });
  }

  SubmitData() {
    console.log(this.signup.value);
    this.route.navigate(['header'])

  }



}
