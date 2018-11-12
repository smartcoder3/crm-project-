import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  todoForm: FormGroup;
  optionsSelect;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
    this.todoForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      reason: ['', Validators.required],
      remarks: ['', ],
      type: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required],
      workAllocated: ['', Validators.required],
    });
  }


  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
  ];
  }
  onSubmit() {
    console.log(this.todoForm.value);
    this.licService.addTodo(this.todoForm.value).subscribe(() => {
      this.router.navigate(['/todo']);
    });
  }

}
