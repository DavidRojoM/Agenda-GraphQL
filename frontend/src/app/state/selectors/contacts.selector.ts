import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';
import { ContactsState } from '../interfaces/contacts-state';

export const selectContactsFeature = (state: AppState) => state.contacts;

export const selectContactsList = createSelector(
  selectContactsFeature,
  (state: ContactsState) => state.contacts
);

export const selectContactsLoading = createSelector(
  selectContactsFeature,
  (state: ContactsState) => state.loading
);
