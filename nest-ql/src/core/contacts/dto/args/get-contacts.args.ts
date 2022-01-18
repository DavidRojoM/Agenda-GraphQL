import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';
import { Contact } from '../../models/contact';

@ArgsType()
export class GetContactsArgs {
  @Field(() => [Contact])
  @IsArray()
  contacts: Contact[];
}
