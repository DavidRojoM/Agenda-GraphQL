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
  })),
  on(actions.addContactRequest, (state) => ({
    ...state,
    loading: true,
  })),
  on(actions.addContactSuccess, (state, { contact }) => ({
    contacts: [...state.contacts, contact],
    loading: false,
  })),
  on(actions.addContactFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(actions.updateContactRequest, (state) => ({
    ...state,
    loading: true,
  })),
  //TODO: UPDATE STORED CONTACT
  on(actions.updateContactSuccess, (state, { contact }) => ({
    ...state,
    loading: false,
  })),
  on(actions.updateContactFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(actions.removeContactRequest, (state) => ({
    ...state,
    loading: true,
  })),
  on(actions.removeContactSuccess, (state, { id }) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact._id !== id),
    loading: false,
  })),
  on(actions.removeContactFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
