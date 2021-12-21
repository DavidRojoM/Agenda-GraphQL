import { ContactsRepository } from "./repository/contacts.repository";
import { Contact } from "../domain/interfaces/contact.interface";

export class ContactsService {
  public contacts: Contact[] = [];
  constructor(private readonly contactsRepository: ContactsRepository) {}

  generateNewContact(): Contact {
    return {
      id: this.generateRandomId(),
      name: "",
      surname: "",
      dni: "",
      address: "",
      phone: "",
    };
  }
  private generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  loadAll = () => {
    return this.contactsRepository.loadAll();
  };

  findAll = () => [...this.contacts];

  findOneById = (id: string) =>
    this.contacts.find((contact) => contact.id === id);

  removeOneById = (id: string) => {
    const newContacts = this.contacts.filter((contact) => contact.id !== id);
    this.contacts = newContacts;
    return newContacts;
  };

  addOne = (contact: Contact) => {
    const newContacts = [...this.contacts, contact];
    this.contacts = newContacts;
    return newContacts;
  };

  editOne = (newContact: Contact) => {
    const newContacts = this.contacts.map((contact) =>
      newContact.id === contact.id ? newContact : contact
    );
    this.contacts = newContacts;
    return newContacts;
  };
}
