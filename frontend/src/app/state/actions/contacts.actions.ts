import { ActionTypes } from './action.types.enum';
import { createAction, props } from '@ngrx/store';
import { Contact } from '../../shared/models/contact';

//TODO: FIX UPDATE
export const actions = {
  loadContactsRequest: createAction(ActionTypes.LOAD_CONTACTS_REQUEST),

  loadContactsSuccess: createAction(
    ActionTypes.LOAD_CONTACTS_SUCCESS,
    props<{ contacts: Contact[] }>()
  ),

  loadContactsFailure: createAction(
    ActionTypes.LOAD_CONTACTS_FAILURE,
    props<{ error: string }>()
  ),

  addContactRequest: createAction(
    ActionTypes.ADD_CONTACT_REQUEST,
    props<{ contact: Contact }>()
  ),

  addContactSuccess: createAction(
    ActionTypes.ADD_CONTACT_SUCCESS,
    props<{ contact: Contact }>()
  ),

  addContactFailure: createAction(
    ActionTypes.ADD_CONTACT_FAILURE,
    props<{ error: string }>()
  ),
  updateContactRequest: createAction(
    ActionTypes.UPDATE_CONTACT_REQUEST,
    props<{ contact: Contact }>()
  ),

  updateContactSuccess: createAction(
    ActionTypes.UPDATE_CONTACT_SUCCESS,
    props<{ contact: Contact }>()
  ),

  updateContactFailure: createAction(
    ActionTypes.UPDATE_CONTACT_FAILURE,
    props<{ error: string }>()
  ),

  removeContactRequest: createAction(
    ActionTypes.REMOVE_CONTACT_REQUEST,
    props<{ id: string }>()
  ),
  removeContactSuccess: createAction(
    ActionTypes.REMOVE_CONTACT_SUCCESS,
    props<{ contact: Contact }>()
  ),
  removeContactFailure: createAction(
    ActionTypes.REMOVE_CONTACT_FAILURE,
    props<{ error: string }>()
  ),
};
