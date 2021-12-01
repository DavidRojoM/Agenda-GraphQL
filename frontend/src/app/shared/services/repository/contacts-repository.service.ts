import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDTO } from '../../domain/dto/contact-dto';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactsRepositoryService {
  BASE_URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  public findContacts = () =>
    this.http.get(`${this.BASE_URL}/contacts`).pipe(delay(2000));

  public addContact = (contact: ContactDTO) =>
    this.http.post(`${this.BASE_URL}/contacts`, contact);

  public updateContact = (contact: ContactDTO) =>
    this.http.put(`${this.BASE_URL}/contacts/${contact._id}`, contact);

  public deleteContact = (contactId: string) =>
    this.http.delete(`${this.BASE_URL}/contacts/${contactId}`);
}
