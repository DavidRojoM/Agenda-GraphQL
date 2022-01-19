import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';
import { AddContactInput } from './dto/input/add-contact.input';
import { UpdateContactInput } from './dto/input/update-contact.input';
import { DeleteContactInput } from './dto/input/delete-contact.input';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(private readonly contactsService: ContactsService) {}
  //Añadir async si usamos base de datos

  @Query(() => [Contact], {
    nullable: 'items',
  })
  async getContacts(): Promise<Contact[]> {
    // return this.contactsService.getContacts().subscribe((res) => {
    //   console.log(res.data);
    //   return res.data as Contact[];
    // });
    return await this.contactsService.getContacts();
  }

  @Mutation(() => Contact)
  async addContact(
    @Args('addContactData') contact: AddContactInput,
  ): Promise<Contact> {
    return await this.contactsService.addContact(contact);
  }

  @Mutation(() => Contact)
  async updateContact(
    @Args('updateContactData') contact: UpdateContactInput,
  ): Promise<Contact> {
    return await this.contactsService.updateContact(contact._id, contact);
  }

  @Mutation(() => Contact)
  async deleteContact(
    @Args('deleteContactData') id: DeleteContactInput,
  ): Promise<Contact> {
    return await this.contactsService.deleteContact(id);
  }
}
