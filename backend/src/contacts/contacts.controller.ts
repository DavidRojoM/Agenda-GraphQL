import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/api/v1/contacts')
export class ContactsController {
  @Get()
  getContacts() {
    return 'Read contacts';
  }

  @Post()
  createContact() {
    return 'Create contact';
  }

  @Put()
  updateContact() {
    return 'Update contact';
  }

  @Delete()
  deleteContact() {
    return 'Delete contact';
  }
}
