import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-life-insurance-detail',
  templateUrl: './life-insurance-detail.component.html',
  styleUrls: ['./life-insurance-detail.component.scss']
})
export class LifeInsuranceDetailComponent implements OnInit {
  id: String;
  issue: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.licService.getLifeInsuranceById(this.id).subscribe(res => {
        this.issue = res;
      });
    });
  }
  deleteLic(id) {
    this.licService.deleteLifeInsurance(this.id).subscribe(res => {
      this.router.navigate(['/lifeinsurance']);
    });
  }

}
