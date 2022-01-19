import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { RepositoryInterface } from '../../../../common/repository.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsRepositoryService implements RepositoryInterface {
  constructor(private readonly http: HttpClient) {}

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(delay(2000));
  }

  post<T>(url: string, values: any): Observable<T> {
    return this.http.post<T>(url, values);
  }

  put<T>(url: string, values: any): Observable<T> {
    return this.http.put<T>(url, values);
  }
}
