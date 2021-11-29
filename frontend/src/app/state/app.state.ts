import { contactsReducer } from './reducers/contacts.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './interfaces/app-state.interface';

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  contacts: contactsReducer,
};
