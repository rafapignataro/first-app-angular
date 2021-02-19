import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  @ViewChild('emailInput') emailInput: ElementRef;

  @ViewChild('passwordInput') passwordInput: ElementRef;

  email: string;

  password: string;

  form: any;

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
    this.loginService.enter(email, password).subscribe(
      (response) => console.log('Sucesso', response),
      (error) => console.error(error),
    );
  }

  exibeErro(form: NgForm, elementName: string) {
    if (!form.controls[elementName]) return false;
    return (
      form.controls[elementName]?.invalid && form.controls[elementName].touched
    );
  }
}
