import { ActionTypes } from './action.types.enum';
import { createAction, props } from '@ngrx/store';
import { Contact } from '../../shared/models/contact';

export const actions = {
  loadContactsRequest: createAction(ActionTypes.LOAD_CONTACTS_REQUEST),

  loadContactsSuccess: createAction(
    ActionTypes.LOAD_CONTACTS_SUCCESS,
    props<{ contacts: Contact[]; loading: false }>()
  ),

  loadContactsFailure: createAction(
    ActionTypes.LOAD_CONTACTS_FAILURE,
    props<{ error: string; loading: false }>()
  ),

  addContactRequest: createAction(
    ActionTypes.ADD_CONTACT_REQUEST,
    props<{ contact: Contact; loading: true }>()
  ),

  addContactSuccess: createAction(
    ActionTypes.ADD_CONTACT_SUCCESS,
    props<{ contact: Contact; loading: false }>()
  ),

  addContactFailure: createAction(
    ActionTypes.ADD_CONTACT_FAILURE,
    props<{ error: string; loading: false }>()
  ),
};
