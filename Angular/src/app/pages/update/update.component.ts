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
  private activatedId = '';
  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectContactsLoading);
    this.route.paramMap.subscribe((paramMap) => {
      this.activatedId = paramMap.get('id') as string;
    });
  }

  updateAction = (contact: Contact) => {
    this.store.dispatch(
      actions.updateContactRequest({
        contact: {
          _id: this.activatedId,
          ...contact,
        },
      })
    );
    this.router.navigate(['']);
  };
}
