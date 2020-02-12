import { Component, OnInit, Input } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'payoda-workspace-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() dataSource: any;
  @Input() displayedColumns: any;
  private catchedDatasource: any;
  constructor() {}
  sortData(sort: Sort, dataSource) {
    if (Array.isArray(dataSource)) {
      this.dataSource = dataSource;
    } else {
      this.dataSource = this.catchedDatasource;
    }

    if (!sort.active || sort.direction === '') {
      this.dataSource = dataSource;
      return;
    }

    this.dataSource = this.dataSource.slice().sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'phone':
          return compare(a.phone, b.phone, isAsc);
        case 'productName':
          return compare(a.productName, b.productName, isAsc);
        case 'productUsedSince':
          return compare(a.productUsedSince, b.productUsedSince, isAsc);
        default:
          return 0;
      }
    });
  }

  applyFilter(event: Event) {
    if (Array.isArray(this.dataSource)) {
      this.catchedDatasource = this.dataSource;
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource = new MatTableDataSource(this.dataSource);
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } else {
      this.dataSource = this.catchedDatasource;
    }
  }
  ngOnInit() {}
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
