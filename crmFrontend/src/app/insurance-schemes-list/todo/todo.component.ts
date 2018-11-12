import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MdbTableService } from 'PATH-TO-MDB-ANGULAR';

import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  list: any = [];
  searchText: String = '';
  previous: String;
  headElements = ['S.No', 'Name', 'Contact No', 'Reason', 'Due Date', 'Allocated To', 'Details'];

  // tableData = [
  //   { id: '1', firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  //   { id: '2', firstName: 'Jacob', lastName: 'Thornton', username: '@jcox' },
  //   { id: '3', firstName: 'Larry', lastName: 'Last', username: '@larry' },
  //   { id: '4', firstName: 'John', lastName: 'Doe', username: '@johny' },
  //   { id: '5', firstName: 'Zigi', lastName: 'Kiwi', username: '@zk' },
  //   { id: '6', firstName: 'Beatrice', lastName: 'Selphie', username: '@bsl' },
  // ];

  constructor(private licService: LicService, private router: Router) { }
  // @HostListener('input') oninput() {
  //   this.searchItems();
  // }
  ngOnInit() {
    this.fetchIssues();

    // for (let i = 1; i <= 10; i++) {
    //   this.list.push({ id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i });
    // }

    // this.tableService.setDataSource(this.list);
    // this.list = this.tableService.getDataSource();
    // this.previous = this.tableService.getDataSource();
  }

  // searchItems() {
  //   const prev = this.tableService.getDataSource();

  //   if (!this.searchText) {
  //     this.tableService.setDataSource(this.previous);
  //     this.list = this.tableService.getDataSource();
  //   }

  //   if (this.searchText) {
  //     this.list = this.tableService.searchLocalDataBy(this.searchText);
  //     this.tableService.setDataSource(prev);
  //   }

  // }

  // filterIt(arr: any, searchKey: any) {
  //   return arr.filter((obj: any) => {
  //     return Object.keys(obj).some((key) => {
  //       return obj[key].includes(searchKey);
  //     });
  //   });
  // }

  filterIt(arr: any, searchKey: any) {
    return arr.filter((obj: any) => {
      return Object.keys(obj).some((key) => {
        if (obj[key] !== null) {
          const tempKey = obj[key].toString().toLowerCase();
          const tempSearch = searchKey.toLowerCase();
          return tempKey.includes(tempSearch);
        }
      });
    });
  }
  search() {
    if (!this.searchText) {
      return this.list;
    }
    if (this.searchText) {
      return this.filterIt(this.list, this.searchText);
    }
  }




  fetchIssues() {
    this.licService
      .getTodo()
      .subscribe((data) => {
        this.list = data;
        console.log('Data requested ...');
        console.log(this.list);
      });
  }

  deleteList(id) {
    if (confirm('Are you sure to delete this record ?') === true) {
    this.licService.deleteTodo(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}
}
