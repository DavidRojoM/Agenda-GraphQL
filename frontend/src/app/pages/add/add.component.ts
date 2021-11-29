import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from '../../state/actions/contacts.actions';
import { Contact } from '../../shared/models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  addAction = (contact: Contact) => {
    this.store.dispatch(actions.addContactRequest({ contact }));
  };
}
