import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../../shared/models/contact';
import { actions } from '../../state/actions/contacts.actions';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  updateAction = (contact: Contact) => {
    this.store.dispatch(actions.addContactRequest({ contact }));
  };
}
