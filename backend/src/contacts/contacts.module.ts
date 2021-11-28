import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repository/contacts-repository/contacts-repository.service';

@Module({
  imports: [],
  controllers: [ContactsController],
  providers: [ContactsService, ContactsRepository],
})
export class ContactsModule {}
