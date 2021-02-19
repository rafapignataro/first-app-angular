import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('emailInput') emailInput: ElementRef;

  @ViewChild('passwordInput') passwordInput: ElementRef;

  email: string;

  password: string;

  form: any;

  onSubmit(form: FormGroup) {
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
  }

  exibeErro(form: FormGroup, elementName: string) {
    if (!form.controls[elementName]) return false;
    return (
      form.controls[elementName]?.invalid && form.controls[elementName].touched
    );
  }
}
