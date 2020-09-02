import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Login } from '../_models/app.model';
import { NotificationService } from '../notification.service';

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
    private notificationService: NotificationService

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
        sessionStorage.setItem('usertoken', data.user_token)
        sessionStorage.setItem('user_id', data.user_id)
        this.router.navigate(['dashboard']);
        this.notificationService.success('Login Succesfull')

      }

    },
      err => {
        console.log(err);
        this.notificationService.error('Login Error')
      }
    )

  }
}
