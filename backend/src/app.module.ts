import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environment';

@Module({
  imports: [
    ContactsModule,
    MongooseModule.forRoot(`mongodb://${environment.dbHost}`, {
      dbName: environment.dbName,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
