import { Injectable } from '@angular/core';
import { ContactsRepositoryService } from './repository/contacts-repository.service';
import { Contact } from '../domain/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepositoryService) {}

  public findContacts = () => this.contactsRepository.findContacts();

  public addContact = (contact: Contact) =>
    this.contactsRepository.addContact(contact);

  public updateContact = (contact: Contact) =>
    this.contactsRepository.updateContact(contact);

  //TODO: Preguntar como hacer observable solo de la id del objeto (el back tiene que devolver la id(?))
  public deleteContact = (id: string) =>
    this.contactsRepository.deleteContact(id);
}
