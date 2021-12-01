import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from '../domain/models/contact.interface';
import { ContactDTO } from '../domain/dto/contactDTO';

@Injectable()
export class ContactsRepository {
  constructor(@InjectModel('Contact') private contactModel: Model<Contact>) {}

  findAll = async (): Promise<ContactDTO[]> => this.contactModel.find();

  addOne = async (contact: ContactDTO): Promise<ContactDTO> => {
    const newContact = new this.contactModel(contact);
    return newContact.save();
  };

  deleteOne = async (id: string) => this.contactModel.findByIdAndDelete(id);

  updateOne = async ({ id, contact }: { contact: ContactDTO; id: string }) =>
    this.contactModel.findByIdAndUpdate(id, contact, {
      new: true,
    });
}
