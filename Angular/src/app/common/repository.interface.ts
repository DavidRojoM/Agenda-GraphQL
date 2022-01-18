import { Observable } from 'rxjs';

export interface RepositoryInterface {
  get<T>(url: string): Observable<T>;

  delete<T>(url: string): Observable<T>;

  post<T>(url: string, values: any): Observable<T>;

  put<T>(url: string, values: any): Observable<T>;
}
