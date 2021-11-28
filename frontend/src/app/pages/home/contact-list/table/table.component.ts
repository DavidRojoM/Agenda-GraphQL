import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

const DATA = [
  {
    id: '1',
    name: 'David',
    surname: 'fffsd',
    address: 'C/ Falsa 123',
    dni: '623234',
    phone: '2342345',
  },
  {
    id: '2',
    name: 'Pedro',
    surname: 'asd',
    address: 'B/ Falsa 123',
    dni: '56734',
    phone: '24356234',
  },
  {
    id: '3',
    name: 'Jesus',
    surname: 'hfgh',
    address: 'A/ Falsa 123',
    dni: '6586789345',
    phone: '123123',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'surname',
    'address',
    'dni',
    'phone',
    'actions',
  ];
  dataSource = new MatTableDataSource(DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
