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

  addContact = (contact: ContactDTO) =>
    this.http.post(`${this.BASE_URL}contacts`, contact);

  updateContact = (contact: ContactDTO) =>
    this.http.put(`${this.BASE_URL}contacts/${contact._id}`, contact);

  deleteContact = (contactId: string) =>
    this.http.delete(`${this.BASE_URL}contacts/${contactId}`);
}
