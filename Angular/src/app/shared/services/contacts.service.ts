import { Injectable } from '@angular/core';
import { ContactsRepositoryService } from './repository/contacts-repository.service';
import { Contact } from '../domain/models/contact';
import { ContactDTO } from '../domain/dto/contact-dto';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  BASE_URL = 'http://localhost:3000/api/v1/contacts';

  constructor(private readonly contactsRepository: ContactsRepositoryService) {}

  public findContacts = () =>
    this.contactsRepository.get<ContactDTO[]>(this.BASE_URL);

  public addContact = (contact: Contact) =>
    this.contactsRepository.post<ContactDTO>(this.BASE_URL, contact);

  public updateContact = (contact: Contact) =>
    this.contactsRepository.put<ContactDTO>(
      `${this.BASE_URL}/${contact._id}`,
      contact
    );

  public deleteContact = (id: string) =>
    this.contactsRepository.delete<ContactDTO>(`${this.BASE_URL}/${id}`);
}
