import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicService } from '../../shared/services/lic.service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.scss']
})
export class ServicesDetailComponent implements OnInit {
  id: String;
  issue: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private licService: LicService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.licService.getServicesById(this.id).subscribe(res => {
        this.issue = res;
      });
    });
  }
  deleteService(id) {
    this.licService.deleteServices(this.id).subscribe(res => {
      this.router.navigate(['/services']);
    });
  }
}
