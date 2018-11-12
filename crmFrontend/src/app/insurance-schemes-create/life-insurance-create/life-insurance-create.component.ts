import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-life-insurance-create',
  templateUrl: './life-insurance-create.component.html',
  styleUrls: ['./life-insurance-create.component.scss']
})
export class LifeInsuranceCreateComponent implements OnInit {

  lifeInsuranceForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
    this.lifeInsuranceForm = this.fb.group({
      policyNo: ['', Validators.required],
      name: ['', Validators.required],
      DOC: ['', Validators.required],
      planTerm: ['', Validators.required],
      mode: ['', ],
      FUB:  ['', Validators.required],
      installmentPremium: ['', Validators.required],
      gst: ['', ],
      due: ['', ],
      totalPremium: ['', ],
      contactNo: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.lifeInsuranceForm.value);
    this.licService.addLifeInsurance(this.lifeInsuranceForm.value).subscribe(() => {
      this.router.navigate(['/lifeinsurance']);
    });
  }

}
