import { Contact } from '../../shared/models/contact';

export interface ContactsState {
  loading: boolean;
  contacts: ReadonlyArray<Contact>;
}
