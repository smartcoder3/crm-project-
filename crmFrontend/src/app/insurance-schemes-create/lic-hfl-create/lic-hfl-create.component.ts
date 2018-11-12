import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-lic-hfl-create',
  templateUrl: './lic-hfl-create.component.html',
  styleUrls: ['./lic-hfl-create.component.scss']
})
export class LicHflCreateComponent implements OnInit {

  licHflForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
     this.licHflForm = this.fb.group({
      houseValue: ['', Validators.required],
      landValue: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
      yearlyIncome: ['', Validators.required],
      contactNo: ['', Validators.required],
  });
}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.licHflForm.value);
    this.licService.addLicHfl(this.licHflForm.value).subscribe(() => {
      this.router.navigate(['/lichfl']);
    });
  }
}
