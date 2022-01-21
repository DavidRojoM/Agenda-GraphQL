export interface RepositoryInterface {
  get<T>(url: string): Promise<T>;

  delete<T>(url: string): Promise<T>;

  post<T>(url: string, values: any): Promise<T>;

  put<T>(url: string, values: any): Promise<T>;
}
