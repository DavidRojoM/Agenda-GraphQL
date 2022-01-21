import { Module } from '@nestjs/common';
import { ContactsRepository } from './repository/contacts-repository';
import { ContactsResolver } from './contacts.resolver';
import { ContactsService } from './contacts.service';

@Module({
  imports: [],
  providers: [ContactsService, ContactsRepository, ContactsResolver],
})
export class ContactsModule {}
