import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';


@Component({
  selector: 'app-life-insurance-edit',
  templateUrl: './life-insurance-edit.component.html',
  styleUrls: ['./life-insurance-edit.component.scss']
})
export class LifeInsuranceEditComponent implements OnInit {
  lifeInsuranceUpdateForm: FormGroup;
  id: String;
  issue: any = {};

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
     this.lifeInsuranceUpdateForm = this.fb.group({
      policyNo: ['', Validators.required],
      name: ['', Validators.required],
      DOC: ['', Validators.required],
      planTerm: ['', Validators.required],
      mode: ['', Validators.required],
      FUB:  ['', Validators.required],
      installmentPremium: ['', Validators.required],
      gst: ['', Validators.required],
      due: ['', Validators.required],
      totalPremium: ['', Validators.required],
      contactNo: ['', Validators.required],
  });
}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params.id;
    this.licService.getLifeInsuranceById(this.id).subscribe(res => {
      this.issue = res;
      console.log(this.issue);
      const DOC = (this.issue[0].DOC).toString().split('T')[0];
      const FUB = (this.issue[0].FUB).toString().split('T')[0];

      this.lifeInsuranceUpdateForm.get('policyNo').setValue(this.issue[0].policyNo);
      this.lifeInsuranceUpdateForm.get('name').setValue(this.issue[0].name);
      this.lifeInsuranceUpdateForm.get('DOC').setValue(DOC);
      this.lifeInsuranceUpdateForm.get('planTerm').setValue(this.issue[0].planTerm);
      this.lifeInsuranceUpdateForm.get('mode').setValue(this.issue[0].mode);
      this.lifeInsuranceUpdateForm.get('FUB').setValue(FUB);
      this.lifeInsuranceUpdateForm.get('installmentPremium').setValue(this.issue[0].installmentPremium);
      this.lifeInsuranceUpdateForm.get('gst').setValue(this.issue[0].gst);
      this.lifeInsuranceUpdateForm.get('due').setValue(this.issue[0].due);
      this.lifeInsuranceUpdateForm.get('totalPremium').setValue(this.issue[0].mode);
      this.lifeInsuranceUpdateForm.get('contactNo').setValue(this.issue[0].contactNo);
    });
  });
}

onUpdate() {
  this.licService.updateLifeInsurance(this.id, this.lifeInsuranceUpdateForm.value).subscribe(() => {
    this.router.navigate(['/lifeinsurance']);

  });
}
}

