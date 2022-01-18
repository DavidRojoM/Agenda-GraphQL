import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateContactInput {
  @Field()
  @IsString()
  _id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  surname: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  address: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  dni: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  phone: string;
}
