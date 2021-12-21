import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectContactsList,
  selectContactsLoading,
} from '../../../state/selectors/contacts.selector';
import { Contact } from '../../../shared/domain/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  contacts$: Observable<readonly Contact[]> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectContactsLoading);
    this.contacts$ = this.store.select(selectContactsList);
  }
}
