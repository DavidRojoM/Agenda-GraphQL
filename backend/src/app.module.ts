import { Module } from '@nestjs/common';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  imports: [],
  controllers: [ContactsController],
  providers: [],
})
export class AppModule {}
