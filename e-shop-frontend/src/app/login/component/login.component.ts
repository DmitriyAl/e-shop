import {Component, OnInit} from '@angular/core';
import {Credentials} from "../model/credentials";
import {LoginService} from "../service/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/internal/operators/first";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loginService.login(this.f.username.value, this.f.password.value).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        }, error => console.log(error));
  }
}
