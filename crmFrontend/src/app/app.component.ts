
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './shared/Authservice/auth.service';
import { OnChange } from 'angular-bootstrap-md/angular-bootstrap-md/utils/decorators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  value: boolean;
  constructor (private authService: AuthService) {
     // this.value = this.authService.getisLoggedIn();
      console.log('value : ', this.value);
  }

  title = 'insurance';
  ngOnChanges() {
    console.log('value 2 : ', this.value);
  }
}
