import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChallengesService } from 'src/app/services/challenges.service';

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

  displayedColumns: string[] = ['id', 'title', 'description', 'tags', 'count', 'createDateTime'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayData = [];

  constructor(private challengesService: ChallengesService) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getChallenges();
  }

  getChallenges() {
    this.challengesService.getChallengesList().subscribe((data: any) => {
      this.displayData = [...data.data]
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.displayData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addChallenges() {

  }

  upvote(row) {
    const index = this.displayData.indexOf(row);
    if (index !== -1) {
      this.displayData[index].count++;
    }
  }

}
