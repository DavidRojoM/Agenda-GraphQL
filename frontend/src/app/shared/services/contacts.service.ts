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

  deleteContact = (contact: Contact) => {
    if (!contact.id) {
      return new Error('Contact id not found');
    }
    return this.contactsRepository.deleteContact(contact.id);
  };
}