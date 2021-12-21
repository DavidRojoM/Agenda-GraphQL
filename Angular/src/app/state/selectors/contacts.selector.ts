import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';
import { ContactsState } from '../interfaces/contacts-state';

const selectContactsFeature = ({ contacts }: AppState) => contacts;

export const selectContactsList = createSelector(
  selectContactsFeature,
  ({ contacts }: ContactsState) => contacts
);

export const selectContactsLoading = createSelector(
  selectContactsFeature,
  ({ loading }: ContactsState) => loading
);

export const selectContactsError = createSelector(
  selectContactsFeature,
  ({ error }: ContactsState) => error
);

export const selectContactById = (id: string) =>
  createSelector(selectContactsFeature, ({ contacts }) => {
    if (contacts) {
      return contacts.find(({ _id }) => _id === id);
    } else {
      return {};
    }
  });
