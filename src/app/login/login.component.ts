import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  @ViewChild('emailInput') emailInput: ElementRef;

  @ViewChild('passwordInput') passwordInput: ElementRef;

  email: string;

  password: string;

  form: any;

  isLoading: boolean;

  isError: boolean;

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (!form.controls.email.valid) {
        this.emailInput.nativeElement.focus();
        return;
      }

      if (!form.controls.password.valid) {
        this.passwordInput.nativeElement.focus();
      }
    }

    this.login(this.email, this.password);
  }

  login(email: string, password: string) {
    this.isLoading = true;
    this.isError = false;

    this.loginService
      .enter(email, password)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe(
        (response) => this.router.navigate(['home']),
        () => {
          this.isError = true;
        },
      );
  }

  exibeErro(form: NgForm, elementName: string) {
    if (!form.controls[elementName]) return false;
    return (
      form.controls[elementName]?.invalid && form.controls[elementName].touched
    );
  }
}
