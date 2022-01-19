import { Module } from '@nestjs/common';
import { ContactsRepository } from './repository/contacts-repository';
import { ContactsResolver } from './contacts.resolver';
import { ContactsService } from './contacts.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    ContactsService,
    ContactsRepository,
    ContactsResolver,
    HttpModule,
  ],
})
export class ContactsModule {}
