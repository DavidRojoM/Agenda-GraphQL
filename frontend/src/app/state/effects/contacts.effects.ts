import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ContactsService } from '../../shared/services/contacts.service';
import { ActionTypes } from '../actions/action.types.enum';
import { Contact } from '../../shared/models/contact';
import { ContactsState } from '../interfaces/contacts-state';

@Injectable()
export class ContactsEffects {
  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LOAD_CONTACTS_REQUEST),
      mergeMap(() =>
        this.contactsService.findContacts().pipe(
          map((contacts) => ({
            type: ActionTypes.LOAD_CONTACTS_SUCCESS,
            contacts,
          })),
          catchError((error) =>
            of({
              type: ActionTypes.LOAD_CONTACTS_FAILURE,
              error,
            })
          )
        )
      )
    )
  );

  //TODO: REFACTOR
  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.ADD_CONTACT_REQUEST),
      mergeMap(({ contact }) => {
        console.log(contact);
        return this.contactsService.addContact(contact).pipe(
          map((contacts) => ({
            type: ActionTypes.ADD_CONTACT_SUCCESS,
            contacts,
          })),
          catchError((error) =>
            of({
              type: ActionTypes.ADD_CONTACT_FAILURE,
              error,
            })
          )
        );
      })
    )
  );

  //TODO: REFACTOR
  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.UPDATE_CONTACTS_REQUEST),
      mergeMap(({ id, contact }) => {
        return this.contactsService.updateContact(id, contact).pipe(
          map((contacts) => ({
            type: ActionTypes.UPDATE_CONTACT_SUCCESS,
            contacts,
          })),
          catchError((error) =>
            of({
              type: ActionTypes.UPDATE_CONTACT_FAILURE,
              error,
            })
          )
        );
      })
    )
  );

  //TODO: REFACTOR
  // removeContact$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ActionTypes.REMOVE_CONTACT_REQUEST),
  //     mergeMap((contact) => {
  //       console.log(contact);
  //       return this.contactsService.deleteContact(contact).pipe(
  //         map((contacts) => ({
  //           type: ActionTypes.UPDATE_CONTACT_SUCCESS,
  //           contacts,
  //         })),
  //         catchError((error) =>
  //           of({
  //             type: ActionTypes.UPDATE_CONTACT_FAILURE,
  //             error,
  //           })
  //         )
  //       );
  //     })
  //   )
  // );

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {}
}
