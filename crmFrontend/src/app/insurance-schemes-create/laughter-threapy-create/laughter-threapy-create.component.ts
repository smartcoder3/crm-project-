import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-laughter-threapy-create',
  templateUrl: './laughter-threapy-create.component.html',
  styleUrls: ['./laughter-threapy-create.component.scss']
})
export class LaughterThreapyCreateComponent implements OnInit {

  LaughterThreapyForm: FormGroup;

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
  }
  onSubmit() {
    console.log(this.LaughterThreapyForm.value);
    this.licService.addLaughterThreapy(this.LaughterThreapyForm.value).subscribe(() => {
      this.router.navigate(['/laughterthreapy']);
    });
  }

}
