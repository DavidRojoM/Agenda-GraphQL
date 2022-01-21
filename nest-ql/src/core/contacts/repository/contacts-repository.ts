import { Injectable } from '@nestjs/common';
import { Contact } from '../models/contact';
import axios from 'axios';

@Injectable()
export class ContactsRepository {
  private errorContact: Contact = {
    _id: 'ERROR',
    dni: 'ERROR',
    address: 'ERROR',
    name: 'ERROR',
    phone: 'ERROR',
    surname: 'ERROR',
  };
  BASE_URL = 'http://localhost:3000/api/v1/contacts';

  get(): Promise<Contact[]> {
    return axios
      .get<Contact[]>(this.BASE_URL)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
        return [];
      });
  }

  delete(id: string): Promise<Contact> {
    return axios
      .delete<Contact>(`${this.BASE_URL}/${id}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
        return this.errorContact;
      });
  }

  post(values: any): Promise<Contact> {
    return axios
      .post<Contact>(this.BASE_URL, values)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
        return this.errorContact;
      });
  }

  put(id: string, values: any): Promise<Contact> {
    return axios
      .put<Contact>(`${this.BASE_URL}/${id}`, values)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
        return this.errorContact;
      });
  }
}
