import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { RepositoryInterface } from '../../../../common/repository.interface';
import { Observable } from 'rxjs';
import { getContactsQuery } from './queries/get-contacts.query';
import { map } from 'rxjs/operators';
import { addContactMutation } from './mutations/add-contact.mutation';
import { Contact } from '../../../domain/models/contact';
import { updateContactMutation } from './mutations/update-contact.mutation';
import { deleteContactMutation } from './mutations/delete-contact.mutation';

@Injectable({
  providedIn: 'root',
})
export class ContactsGraphqlRepositoryService implements RepositoryInterface {
  constructor(private apollo: Apollo) {}

  delete<T>(id: string): Observable<T> {
    console.log(id);
    return this.apollo
      .mutate<T>({
        mutation: deleteContactMutation,
        variables: {
          deleteContactData: {
            id: id,
          },
        },
      })
      .pipe(
        map(({ data }: any) => {
          return data.deleteContact;
        })
      );
  }

  get<T>(url: string): Observable<T> {
    return this.apollo
      .watchQuery<T>({
        query: getContactsQuery,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getContacts));
  }

  post<T>(url: string, values: any): Observable<T> {
    return of<T>();
  }

  put<T>(url: string, values: any): Observable<T> {
    return of<T>();
  }
}
