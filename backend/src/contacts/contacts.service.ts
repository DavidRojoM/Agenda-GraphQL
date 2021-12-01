import { Injectable } from '@nestjs/common';
import { ContactsRepository } from './repository/contacts-repository.service';
import { ContactDTO } from './domain/dto/contactDTO';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository) {}

  getContacts = () => this.contactRepository.findAll();

  createContact = (contact: ContactDTO) =>
    this.contactRepository.addOne(contact);

  deleteContact = (id: string) => this.contactRepository.deleteOne(id);

  updateContact = (options: { contact: ContactDTO; id: string }) =>
    this.contactRepository.updateOne(options);
}
