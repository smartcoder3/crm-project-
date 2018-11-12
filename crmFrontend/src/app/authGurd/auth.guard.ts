import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

import { AuthService } from '../shared/Authservice/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getisLoggedIn();
  }
  // canActivate(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.authService.getCurrentUser()
  //     .then(user => {
  //       this.router.navigate(['/home']);
  //       return resolve(false);
  //     }, err => {
  //       return resolve(true);
  //     });
  //   });
  // }

}
