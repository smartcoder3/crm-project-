import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';


@Component({
  selector: 'app-national-insurance-edit',
  templateUrl: './national-insurance-edit.component.html',
  styleUrls: ['./national-insurance-edit.component.scss']
})
export class NationalInsuranceEditComponent implements OnInit {
  nationalInsuranceUpdateForm: FormGroup;
  id: String;
  issue: any = {};

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
     this.nationalInsuranceUpdateForm = this.fb.group({
      name: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      policyNo: ['', Validators.required],
      reference: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      insuranceType: ['', Validators.required],
      coverType: ['', Validators.required],
      premium: ['', Validators.required],
      billDate: ['', Validators.required],
      code: ['', Validators.required],
  });
}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params.id;
    this.licService.getNationalInsuranceById(this.id).subscribe(res => {
      this.issue = res;
      const fromDate = (this.issue[0].fromDate).toString().split('T')[0];
      const toDate = (this.issue[0].toDate).toString().split('T')[0];
      const billDate = (this.issue[0].billDate).toString().split('T')[0];

      this.nationalInsuranceUpdateForm.get('name').setValue(this.issue[0].name);
      this.nationalInsuranceUpdateForm.get('vehicleNo').setValue(this.issue[0].vehicleNo);
      this.nationalInsuranceUpdateForm.get('policyNo').setValue(this.issue[0].policyNo);
      this.nationalInsuranceUpdateForm.get('reference').setValue(this.issue[0].reference);
      this.nationalInsuranceUpdateForm.get('contactNo').setValue(this.issue[0].contactNo);
      this.nationalInsuranceUpdateForm.get('address').setValue(this.issue[0].address);
      this.nationalInsuranceUpdateForm.get('city').setValue(this.issue[0].city);
      this.nationalInsuranceUpdateForm.get('fromDate').setValue(fromDate);
      this.nationalInsuranceUpdateForm.get('toDate').setValue(toDate);
      this.nationalInsuranceUpdateForm.get('insuranceType').setValue(this.issue[0].insuranceType);
      this.nationalInsuranceUpdateForm.get('coverType').setValue(this.issue[0].coverType);
      this.nationalInsuranceUpdateForm.get('premium').setValue(this.issue[0].premium);
      this.nationalInsuranceUpdateForm.get('billDate').setValue(billDate);
      this.nationalInsuranceUpdateForm.get('code').setValue(this.issue[0].code);

    });
  });
}

onUpdate() {
  this.licService.updateNationalInsurance(this.id, this.nationalInsuranceUpdateForm.value).subscribe(() => {
    this.router.navigate(['/nationalinsurance']);

  });
}
}


