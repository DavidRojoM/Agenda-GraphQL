import { Injectable } from '@angular/core';
import { ContactsRepositoryService } from './repository/contacts-repository.service';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepositoryService) {}

  findContacts = () => this.contactsRepository.findContacts();

  addContact = (contact: Contact) =>
    this.contactsRepository.addContact(contact);

  updateContact = (contact: Contact) =>
    this.contactsRepository.updateContact(contact);

  deleteContact = (id: string) => {
    //TODO: Preguntar como hacer observable solo de la id del objeto
    return this.contactsRepository.deleteContact(id);
  };
}
