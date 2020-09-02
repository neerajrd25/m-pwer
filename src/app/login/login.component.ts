import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Login } from '../_models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private service: LoginService,

  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required]
    });

  }
  onSubmit() {

    const login = this.loginForm.value as Login;
    login.id_type = "email";
    login.tenantid = 3;

    this.service.doLogin(login).subscribe((data) => {
      if (data) {
        sessionStorage.setItem('USER_TOKEN', "token")
        this.router.navigate(['dashboard']);
      } else {

      }

    },
      err => {
        console.log(err);
      }
    )

  }
}
