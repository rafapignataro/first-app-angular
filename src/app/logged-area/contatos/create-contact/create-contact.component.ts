import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
})
export class CreateContactComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private contactsService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  contactForm: FormGroup;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required], Validators.minLength(5)],
      bank: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.validateAllFormFields();

      return;
    }

    this.createContact();
  }

  createContact() {
    const { name, cpf, ag, cc, bank } = this.contactForm.value;
    this.contactsService
      .createContact({
        nome: name,
        cpf,
        cc,
        ag,
        banco: bank,
      })
      .subscribe(
        () => {
          this.toastr.success('Success', 'Contact Created!');
          this.router.navigate(['/contatos']);
        },
        (error) => this.toastr.error('Error', error),
      );
  }

  validateAllFormFields() {
    Object.keys(this.contactForm.controls).forEach((field) =>
      this.contactForm.get(field).markAllAsTouched(),
    );
  }

  showError(elementName: string) {
    if (!this.contactForm.get(elementName)) return false;
    return (
      this.contactForm.get(elementName)?.invalid &&
      this.contactForm.get(elementName).touched
    );
  }
}
