import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';


@Component({
  selector: 'app-lic-hfl-edit',
  templateUrl: './lic-hfl-edit.component.html',
  styleUrls: ['./lic-hfl-edit.component.scss']
})
export class LicHflEditComponent implements OnInit {

  licHflUpdateForm: FormGroup;
  id: String;
  issue: any = {};

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
     this.licHflUpdateForm = this.fb.group({
      houseValue: ['', Validators.required],
      landValue: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
      yearlyIncome: ['', Validators.required],
      contactNo: ['', Validators.required],
  });
}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params.id;
    console.log(this.id);
    this.licService.getLicHflById(this.id).subscribe(res => {
      this.issue = res;
      this.licHflUpdateForm.get('houseValue').setValue(this.issue[0].houseValue);
      this.licHflUpdateForm.get('landValue').setValue(this.issue[0].landValue);
      this.licHflUpdateForm.get('monthlyIncome').setValue(this.issue[0].monthlyIncome);
      this.licHflUpdateForm.get('yearlyIncome').setValue(this.issue[0].yearlyIncome);
      this.licHflUpdateForm.get('contactNo').setValue(this.issue[0].contactNo);
    });
  });
}

onUpdate() {
  this.licService.updateLicHfl(this.id, this.licHflUpdateForm.value).subscribe(() => {
    this.router.navigate(['/lichfl']);
  });
}
}
