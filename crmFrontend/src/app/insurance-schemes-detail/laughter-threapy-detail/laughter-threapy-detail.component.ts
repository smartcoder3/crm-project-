import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';
@Component({
  selector: 'app-laughter-threapy-detail',
  templateUrl: './laughter-threapy-detail.component.html',
  styleUrls: ['./laughter-threapy-detail.component.scss']
})
export class LaughterThreapyDetailComponent implements OnInit {
  id: String;
  issue: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.licService.getLaughterThreaphyById(this.id).subscribe(res => {
        this.issue = res;
      });
    });
  }
  deleteLaughterThreapy(id) {
    this.licService.deleteLaughterThreapy(this.id).subscribe(res => {
      this.router.navigate(['/laughterthreapy']);
    });
  }
}
