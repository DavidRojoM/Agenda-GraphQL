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

  updateContact = (id: string, contact: Contact) =>
    this.contactsRepository.updateContact(id, contact);

  deleteContact = (contact: Contact) => {
    if (!contact._id) {
      return new Error('Contact id not found');
    }
    return this.contactsRepository.deleteContact(contact._id);
  };
}
