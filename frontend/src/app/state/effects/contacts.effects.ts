import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ContactsService } from '../../shared/services/contacts.service';
import { ActionTypes } from '../actions/action.types.enum';

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

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {}
}
