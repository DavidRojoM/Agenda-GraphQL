import { Schema } from 'mongoose';

export const ContactSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  address: { type: String, required: true },
  dni: { type: String, required: true },
  phone: { type: String, required: true },
});
