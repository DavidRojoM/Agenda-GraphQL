import { Module } from '@nestjs/common';
import { ContactsRepository } from './repository/contacts-repository';
import { HttpModule } from '@nestjs/axios';
import { ContactsResolver } from './contacts.resolver';
import { ContactsService } from './contacts.service';

@Module({
  imports: [HttpModule],
  providers: [ContactsService, ContactsRepository, ContactsResolver],
})
export class ContactsModule {}
