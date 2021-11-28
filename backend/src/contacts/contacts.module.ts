import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repository/contacts-repository/contacts-repository.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environment';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${environment.dbUser}:${environment.dbPassword}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`,
    ),
  ],
  controllers: [ContactsController],
  providers: [ContactsService, ContactsRepository],
})
export class ContactsModule {}
