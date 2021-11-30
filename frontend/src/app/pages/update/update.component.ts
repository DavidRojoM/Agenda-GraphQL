import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../../shared/models/contact';
import { actions } from '../../state/actions/contacts.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

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
