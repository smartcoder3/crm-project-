import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';


@Component({
  selector: 'app-national-insurance-create',
  templateUrl: './national-insurance-create.component.html',
  styleUrls: ['./national-insurance-create.component.scss']
})
export class NationalInsuranceCreateComponent implements OnInit {
  nationalInsuranceForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,  private licService: LicService) {
    this.nationalInsuranceForm = this.fb.group({
      name: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      policyNo: ['', Validators.required],
      reference: ['', ],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      insuranceType: ['', Validators.required],
      coverType: ['', Validators.required],
      premium: ['', Validators.required],
      billDate: ['', ],
      code: ['', ],
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.nationalInsuranceForm.value);
    this.licService.addNationalInsurance(this.nationalInsuranceForm.value).subscribe(() => {
      this.router.navigate(['/nationalinsurance']);
    });
  }

}
