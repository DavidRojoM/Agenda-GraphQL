import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { actions } from '../../../../state/actions/contacts.actions';
import { Contact } from '../../../../shared/models/contact';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
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

  constructor(private _liveAnnouncer: LiveAnnouncer, private store: Store) {
    this.data$ = new Observable<readonly Contact[]>();
  }

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

  ngOnInit(): void {
    this.store.dispatch(actions.loadContactsRequest());
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  doSomething() {}
}
