import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  reactform: FormGroup;
  constructor(private fmbuilder: FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.reactform = this.fmbuilder.group({
      title:[null,Validators.required],
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email:[null,[Validators.required,Validators.email]],
      pswd: [null, [Validators.required,Validators.minLength(6)]],
      cpswd: [null, [Validators.required,Validators.minLength(6)]],
      titl:[false,Validators.requiredTrue]
    });
  }

  get RegFormCntrls(){
    return this.reactform.controls;
  }

}
