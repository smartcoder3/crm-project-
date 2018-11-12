import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  contactNo: String;
  issue: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactNo = params.contactNo;
      this.licService.findCustomer(this.contactNo).subscribe(res => {
        this.issue = res;
        console.log(this.issue);
      });
    });
  }

}
