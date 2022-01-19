import { Injectable } from '@nestjs/common';
import { ContactsRepository } from './repository/contacts-repository';
import { AddContactInput } from './dto/input/add-contact.input';
import { UpdateContactInput } from './dto/input/update-contact.input';
import { DeleteContactInput } from './dto/input/delete-contact.input';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepository) {}

  deleteContact({ id }: DeleteContactInput): Promise<Contact> {
    return this.contactsRepository.delete(id);
  }

  // Poner url en parametro
  getContacts(): Promise<Contact[]> {
    return this.contactsRepository.get();
  }

  //Poner url: string,
  addContact(contact: AddContactInput): Promise<Contact> {
    return this.contactsRepository.post(contact);
  }

  updateContact(id: string, newContact: UpdateContactInput): Promise<Contact> {
    return this.contactsRepository.put(id, newContact);
  }
}
