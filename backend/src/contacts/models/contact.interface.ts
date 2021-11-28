import { Document } from 'mongoose';

export interface Contact extends Document {
  id?: string;
  name: string;
  surname: string;
  address: string;
}
