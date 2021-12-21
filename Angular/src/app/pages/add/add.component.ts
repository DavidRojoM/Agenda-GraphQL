import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from '../../state/actions/contacts.actions';
import { Contact } from '../../shared/domain/models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {}

  addAction = (contact: Contact) => {
    this.store.dispatch(actions.addContactRequest({ contact }));
    this.router.navigate(['']);
  };
}
