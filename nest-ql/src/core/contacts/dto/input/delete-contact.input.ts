import { IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteContactInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  id: string;
}
