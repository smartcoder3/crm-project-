import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-laughter-threapy-edit',
  templateUrl: './laughter-threapy-edit.component.html',
  styleUrls: ['./laughter-threapy-edit.component.scss']
})
export class LaughterThreapyEditComponent implements OnInit {
  LaughterThreapyForm: FormGroup;
  id: String;
  issue: any = {};
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
    this.LaughterThreapyForm = this.fb.group({
     institutionName: ['', Validators.required],
     address: ['', Validators.required],
     date: ['', Validators.required],
     contactNo: ['', Validators.required],
     status: ['', Validators.required],
 });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.licService.getLaughterThreaphyById(this.id).subscribe(res => {
        this.issue = res;
        const date = (this.issue[0].date).toString().split('T')[0];
        this.LaughterThreapyForm.get('institutionName').setValue(this.issue[0].institutionName);
        this.LaughterThreapyForm.get('address').setValue(this.issue[0].address);
        this.LaughterThreapyForm.get('date').setValue(date);
        this.LaughterThreapyForm.get('contactNo').setValue(this.issue[0].contactNo);
        this.LaughterThreapyForm.get('status').setValue(this.issue[0].status);
      });
    });
  }
  onUpdate() {
    this.licService.updateLaughterThreaphy(this.id, this.LaughterThreapyForm.value).subscribe(() => {
      this.router.navigate(['/laughterthreapy']);
    });
  }
}
