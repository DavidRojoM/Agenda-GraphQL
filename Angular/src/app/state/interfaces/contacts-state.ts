import { Contact } from '../../shared/domain/models/contact';

export interface ContactsState {
  loading: boolean;
  contacts: ReadonlyArray<Contact>;
  error?: any;
}
