import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { actions } from '../../../../state/actions/contacts.actions';
import { Contact } from '../../../../shared/domain/models/contact';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input() public data$!: Observable<readonly Contact[]>;
  displayedColumns: string[] = [
    'name',
    'surname',
    'address',
    'dni',
    'phone',
    'actions',
  ];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<any>) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.data$.subscribe((data) => {
      this.dataSource = new MatTableDataSource<Contact>(
        data as Contact[]
      ) as any;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(_id: string) {
    this.store.dispatch(actions.removeContactRequest({ id: _id }));
  }
}
