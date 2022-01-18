import { Injectable } from '@nestjs/common';
import { ContactsRepository } from './repository/contacts-repository';
import { AddContactInput } from './dto/input/add-contact.input';
import { UpdateContactInput } from './dto/input/update-contact.input';
import { DeleteContactInput } from './dto/input/delete-contact.input';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepository) {}

  deleteContact({ id }: DeleteContactInput): any {
    return this.contactsRepository.delete(id);
  }

  // Poner url en parametro
  getContacts(): any {
    return this.contactsRepository.get();
  }

  //Poner url: string,
  addContact(contact: AddContactInput): any {
    return this.contactsRepository.post(contact);
  }

  updateContact(id: string, newContact: UpdateContactInput): any {
    return this.contactsRepository.put(id, newContact);
  }
}
