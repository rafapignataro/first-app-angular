import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { IContact } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss'],
})
export class UpdateContactComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private contactsService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  contactForm: FormGroup;

  contactId: string;

  contact: IContact;

  isLoading: boolean;

  isError: boolean;

  ngOnInit(): void {
    this.initForm();
    this.contactId = this.route.snapshot.paramMap.get('id');
    if (this.contactId) this.loadContact();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.validateAllFormFields();

      return;
    }

    this.updateContact();
  }

  loadContact() {
    this.isLoading = true;
    this.isError = false;

    this.contactsService
      .getContact(Number(this.contactId))
      .pipe(
        take(1),
        finalize(() => (this.isLoading = false)),
      )
      .subscribe(
        (response) => {
          this.contactForm.patchValue({
            name: response.nome,
            cpf: response.cpf,
            ag: response.ag,
            cc: response.cc,
            bank: response.banco,
          });
        },
        (error) => console.log(error),
      );
  }

  updateContact() {
    const { name, cpf, ag, cc, bank } = this.contactForm.value;
    this.contactsService
      .updateContact(Number(this.contactId), {
        nome: name,
        cpf,
        cc,
        ag,
        banco: bank,
      })
      .subscribe(
        () => {
          this.toastr.success('Success', 'Contact Updated!');
          this.router.navigate(['/contatos']);
        },
        (error) => this.toastr.error('Error', error),
      );
  }

  initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required], Validators.minLength(5)],
      bank: ['', [Validators.required]],
    });
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
