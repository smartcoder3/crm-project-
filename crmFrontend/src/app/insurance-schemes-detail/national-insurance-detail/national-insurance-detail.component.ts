import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-national-insurance-detail',
  templateUrl: './national-insurance-detail.component.html',
  styleUrls: ['./national-insurance-detail.component.scss']
})
export class NationalInsuranceDetailComponent implements OnInit {
  id: String;
  issue: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.licService.getNationalInsuranceById(this.id).subscribe(res => {
        this.issue = res;
      });
    });
  }
  deleteNationalInsurance(id) {
    this.licService.deleteNationalInsurance(this.id).subscribe(res => {
      this.router.navigate(['/nationalinsurance']);
    });
  }
}
