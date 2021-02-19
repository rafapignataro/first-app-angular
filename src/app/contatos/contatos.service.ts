import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { IContact } from '../contatos/contatos.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<IContact[]>(`${this.API_URL}/contatos?`);
  }

  getContact(id: number) {
    return this.http.get<IContact>(`${this.API_URL}/contatos/${id}`);
  }

  createContact(contact: IContact) {
    return this.http.post<IContact>(`${this.API_URL}/contatos`, contact);
  }

  updateContact(id: number, contact: IContact) {
    return this.http.put<IContact>(`${this.API_URL}/contatos/${id}`, contact);
  }

  deleteContact(id: number) {
    return this.http.delete<IContact>(`${this.API_URL}/contatos/${id}`);
  }
}
