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
  getContacts(): Contact[] {
    return this.contactsService.getContacts();
  }

  @Mutation(() => [Contact])
  addContact(@Args('addContactData') contact: AddContactInput): Contact {
    return this.contactsService.addContact(contact);
  }

  @Mutation(() => [Contact])
  updateContact(
    @Args('updateContactData') contact: UpdateContactInput,
  ): Contact {
    return this.contactsService.updateContact(contact._id, contact);
  }

  @Mutation(() => [Contact])
  deleteContact(@Args('deleteContactData') id: DeleteContactInput): Contact {
    return this.contactsService.deleteContact(id);
  }
}
