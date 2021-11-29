import { createReducer, on } from '@ngrx/store';
import { actions } from '../actions/contacts.actions';
import { ContactsState } from '../interfaces/contacts-state';

export const initialState: ContactsState = { loading: false, contacts: [] };

export const contactsReducer = createReducer(
  initialState,
  on(actions.loadContactsRequest, (state) => ({
    ...state,
    loading: true,
  })),
  on(actions.loadContactsSuccess, (state, { contacts }) => ({
    ...state,
    loading: false,
    contacts,
  })),
  on(actions.loadContactsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
