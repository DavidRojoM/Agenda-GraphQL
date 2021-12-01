import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactDTO } from './domain/dto/contactDTO';
import { ContactsService } from './contacts.service';

@Controller('/api/v1/contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Get()
  getContacts() {
    return this.contactsService.getContacts();
  }

  @Post()
  createContact(@Body() contact: ContactDTO) {
    return this.contactsService.createContact(contact);
  }

  @Put('/:id')
  updateContact(@Body() contact: ContactDTO, @Param('id') id: string) {
    const options = {
      id,
      contact,
    };
    return this.contactsService.updateContact(options);
  }

  @Delete('/:id')
  deleteContact(@Param('id') id: string) {
    return this.contactsService.deleteContact(id);
  }
}
