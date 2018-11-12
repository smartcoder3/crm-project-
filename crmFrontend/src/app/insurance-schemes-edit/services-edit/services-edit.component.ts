import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';


@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.scss']
})
export class ServicesEditComponent implements OnInit {
  servicesUpdateForm: FormGroup;
  id: String;
  issue: any = {};

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
     this.servicesUpdateForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      weddingdate: ['', Validators.required],
      address: ['', Validators.required],
      reason: ['', Validators.required],
      purpose: ['', Validators.required],
      type: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required],
  });
}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params.id;
    this.licService.getServicesById(this.id).subscribe(res => {
      this.issue = res;
      const dob = (this.issue[0].dob).toString().split('T')[0];
      const weddingdate = (this.issue[0].weddingdate).toString().split('T')[0];
      const dueDate = (this.issue[0].duedate).toString().split('T')[0];
      console.log(this.issue);
      this.servicesUpdateForm.get('name').setValue(this.issue[0].name);
      this.servicesUpdateForm.get('contactNo').setValue(this.issue[0].contactNo);
      this.servicesUpdateForm.get('email').setValue(this.issue[0].email);
      this.servicesUpdateForm.get('dob').setValue(dob);
      this.servicesUpdateForm.get('weddingdate').setValue(weddingdate);
      this.servicesUpdateForm.get('address').setValue(this.issue[0].address);
      this.servicesUpdateForm.get('reason').setValue(this.issue[0].reason);
     // this.servicesUpdateForm.get('coverType').setValue(this.issue[0].coverType);
      this.servicesUpdateForm.get('purpose').setValue(this.issue[0].purpose);
      this.servicesUpdateForm.get('type').setValue(this.issue[0].type);
      this.servicesUpdateForm.get('duedate').setValue(dueDate);
      this.servicesUpdateForm.get('status').setValue(this.issue[0].status);

    });
  });
}

onUpdate() {
  this.licService.updateServices(this.id, this.servicesUpdateForm.value).subscribe(() => {
    this.router.navigate(['/services']);

  });
}
}
