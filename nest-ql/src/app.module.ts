import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ContactsModule } from './core/contacts/contacts.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ContactsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
