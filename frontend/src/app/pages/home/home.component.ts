import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectContactsError } from '../../state/selectors/contacts.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<any>, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.store.select(selectContactsError).subscribe((error) => {
      if (error) {
        this.openSnackBar(error);
      }
    });
  }

  private openSnackBar(message: any) {
    this._snackBar.open(message.statusText, 'Dismiss', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
