import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-services-create',
  templateUrl: './services-create.component.html',
  styleUrls: ['./services-create.component.scss']
})
export class ServicesCreateComponent implements OnInit {
  servicesForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,  private licService: LicService) {
    this.servicesForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', ],
      weddingdate: ['', ],
      address: ['', Validators.required],
      reason: ['', Validators.required],
      purpose: ['', ],
      type: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required],
    });
  }


  ngOnInit() {
  }
  onSubmit() {
    console.log(this.servicesForm.value);
    this.licService.addServices(this.servicesForm.value).subscribe(() => {
      this.router.navigate(['/services']);
    });
  }

}
