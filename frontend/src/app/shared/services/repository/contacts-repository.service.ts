import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDTO } from '../../dto/contact-dto';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactsRepositoryService {
  BASE_URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  findContacts = () =>
    this.http.get(`${this.BASE_URL}/contacts`).pipe(delay(2000));

  //TODO: REFACTOR
  addContact = (contact: ContactDTO) => {
    return this.http.post(`${this.BASE_URL}/contacts`, contact);
  };

  //TODO: REFACTOR
  updateContact = (id: string, contact: ContactDTO) => {
    return this.http.put(`${this.BASE_URL}/contacts/${id}`, contact);
  };

  deleteContact = (contactId: string) =>
    this.http.delete(`${this.BASE_URL}/contacts/${contactId}`);
}
