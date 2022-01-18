import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { RepositoryInterface } from '../../../common/repository.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsGraphqlRepositoryService implements RepositoryInterface {
  constructor(private apollo: Apollo) {}

  delete<T>(url: string): Observable<T> {
    return of<T>();
  }

  get<T>(url: string): Observable<T> {
    return of<T>();
  }

  post<T>(url: string, values: any): Observable<T> {
    return of<T>();
  }

  put<T>(url: string, values: any): Observable<T> {
    return of<T>();
  }
}
