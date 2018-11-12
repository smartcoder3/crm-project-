import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-lic-hfl-detail',
  templateUrl: './lic-hfl-detail.component.html',
  styleUrls: ['./lic-hfl-detail.component.scss']
})
export class LicHflDetailComponent implements OnInit {
  id: String;
  issue: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.licService.getLicHflById(this.id).subscribe(res => {
        this.issue = res;
      });
    });
  }
  deletelichfl(id) {
    this.licService.deleteLicHfl(this.id).subscribe(res => {
      this.router.navigate(['/lichfl']);
    });
  }
}
