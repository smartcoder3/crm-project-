import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';
@Component({
  selector: 'app-lic-hfl',
  templateUrl: './lic-hfl.component.html',
  styleUrls: ['./lic-hfl.component.scss']
})
export class LicHflComponent implements OnInit {

  list: any = [];
  searchText: String = '';
  previous: String;
  headElements = ['S.No', 'houseValue', 'land Value', 'Yearly Income', 'Contact No', 'Details'];


  constructor(private licService: LicService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.licService
      .getLicHfl()
      .subscribe((data) => {
        this.list = data;
        console.log('Data requested ...');
        console.log(this.list);
      });
  }



  deleteList(id) {
    if (confirm('Are you sure to delete this record ?') === true) {
    this.licService.deleteLicHfl(id).subscribe(() => {
      this.fetchIssues();
    });
  }
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
}
