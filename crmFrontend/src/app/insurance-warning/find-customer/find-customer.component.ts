import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';
@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.scss']
})
export class FindCustomerComponent implements OnInit {
  list: any = [];
  searchText: String = '';
  previous: String;
  headElements = ['Id', 'Name', 'Contact No', 'DOB', 'Wedding Date', 'Details'];
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
this.fetchIssues();
  }
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
      .getBirthDays ()
      .subscribe((data) => {
        this.list = data;
        console.log('Data requested ...');
        console.log(this.list);
      });
  }

}
