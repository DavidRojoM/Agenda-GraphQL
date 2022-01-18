import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field()
  _id?: string;

  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  address: string;

  @Field()
  dni: string;

  @Field()
  phone: string;
}
