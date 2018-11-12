import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/Authservice/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
   isloggedIn ;
  constructor(
    public authService: AuthService, private router: Router,
   private route: ActivatedRoute,
   private location: Location,
) { }
 logout() {
   this.authService.doLogout()
   .then((res) => {
    //  this.location.back();
    this.router.navigate(['/login']);
    // localStorage.removeItem('key');
     this.authService.setLoggedIn(false);
   }, (error) => {
     console.log('Logout error', error);
   });
 }

  ngOnInit() {
    // this.isloggedIn = this.authService.getisLoggedIn();
    this.isLoggedIn$ = this.authService.getisLoggedIn();
  }

}
