import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../../shared/domain/models/contact';
import { actions } from '../../state/actions/contacts.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { selectContactsLoading } from '../../state/selectors/contacts.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  loading$!: Observable<boolean>;
  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectContactsLoading);
  }

  updateAction = (contact: Contact) => {
    const _id = this.route.snapshot.paramMap.get('id') as string;
    const updatedContact: Contact = {
      _id,
      ...contact,
    };
    this.store.dispatch(
      actions.updateContactRequest({ contact: updatedContact })
    );
    this.router.navigate(['']);
  };
}
