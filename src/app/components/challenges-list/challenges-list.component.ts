import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  title: string;
  description: string;
  tags: string;
  count: string;
}

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'tags', 'count'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const users = [{
      id: '1',
      title: 'Smart tutor',
      description: 'Help user to improve Language, Suggest ideas and unfamiliar words, Check Spell and Grammar and also suggest a solution.',
      tags: 'tech',
      count: '2'
    }, {
      id: '2',
      title: 'Make Learning Fun',
      description: 'Find Creative and fun way to engage kids more in learning.',
      tags: 'feature',
      count: '1'
    }]

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

  addChallenges() {

  }

}
