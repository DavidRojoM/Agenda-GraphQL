import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Contact } from '../models/contact';

@Injectable()
export class ContactsRepository {
  private data: Contact[] = [];
  BASE_URL = 'http://localhost:3000/contacts';
  //Implementar RepositoryInterface
  constructor(private http: HttpService) {}

  //id = url
  delete(id: string): any {
    const filteredContacts = this.data.filter((contact) => contact._id !== id);
    this.data = filteredContacts;
    return filteredContacts;
  }

  // Poner url en parametro
  get(): any {
    return this.data;
  }

  //Poner url: string,
  post(values: any): any {
    this.data = [...this.data, values];
    return this.data;
  }

  put(id: string, values: any): any {
    this.data = this.data.map((contact) =>
      contact._id === id ? values : contact,
    );
    return this.data;
  }
}
