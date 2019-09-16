import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  private regFormGroup: FormGroup;
  private username: FormControl;
  private password: FormControl;
  private email: FormControl;

  constructor(private fb: FormBuilder) {
    var username: string = 'username';
    let password: string = 'password';
    let email: string = 'email';
    this.regFormGroup = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
      'email': [null, Validators.compose([Validators.email, Validators.required])]
    });
    this.username = this.regFormGroup.controls['username'] as FormControl;
    this.password = this.regFormGroup.controls['password'] as FormControl;
    this.email = this.regFormGroup.controls['email'] as FormControl;
  }

  ngOnInit() {
  }

  private onSubmit(): void {
    console.log(this.regFormGroup.value);
  }

  isFieldValid(field: string): boolean {
    return this.regFormGroup.get(field).valid || !this.regFormGroup.get(field).touched;
  }
}
