import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';
import { ContactsState } from '../interfaces/contacts-state';

const selectContactsFeature = (state: AppState) => state.contacts;

export const selectContactsList = createSelector(
  selectContactsFeature,
  (state: ContactsState) => state.contacts
);

export const selectContactsLoading = createSelector(
  selectContactsFeature,
  (state: ContactsState) => state.loading
);

export const selectContactById = (id: string) =>
  createSelector(selectContactsFeature, ({ contacts }) => {
    if (contacts) {
      return contacts.find((contact) => contact._id === id);
    } else {
      return {};
    }
  });
