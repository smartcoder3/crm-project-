import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todoUpdateForm: FormGroup;
  id: String;
  issue: any = {};
  date: Date;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private licService: LicService) {
     this.todoUpdateForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      reason: ['', Validators.required],
      remarks: ['', Validators.required],
      type: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required],
      workAllocated: ['', Validators.required]
  });
}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params.id;
    this.licService.getTodoById(this.id).subscribe(res => {
     console.log(res);
      this.issue = res;
      const dueDate = (this.issue[0].dueDate).toString().split('T')[0];
      console.log(dueDate);
      this.todoUpdateForm.get('name').setValue(this.issue[0].name);
      this.todoUpdateForm.get('contactNo').setValue(this.issue[0].contactNo);
      this.todoUpdateForm.get('address').setValue(this.issue[0].address);
      this.todoUpdateForm.get('reason').setValue(this.issue[0].reason);
      this.todoUpdateForm.get('remarks').setValue(this.issue[0].remarks);
      this.todoUpdateForm.get('type').setValue(this.issue[0].type);
      this.todoUpdateForm.get('duedate').setValue(dueDate);
      this.todoUpdateForm.get('status').setValue(this.issue[0].status);
      this.todoUpdateForm.get('workAllocated').setValue(this.issue[0].workAllocated);

    });
  });
}

onUpdate() {
  this.licService.updateTodo(this.id, this.todoUpdateForm.value).subscribe(() => {
    this.router.navigate(['/todo']);
  });
}
}
