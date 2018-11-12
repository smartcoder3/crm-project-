import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  id: String;
  issue: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.licService.getTodoById(this.id).subscribe(res => {
        this.issue = res;
       console.log(this.issue);
      });
    });
  }
  deleteTodo(id) {
      console.log(id);
    this.licService.deleteTodo(this.id).subscribe(res => {
      this.router.navigate(['/todo']);
    });
  }

}
