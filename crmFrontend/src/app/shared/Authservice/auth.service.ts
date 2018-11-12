import { Injectable } from '@angular/core';

import 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus = false;
  private loggedIn = new BehaviorSubject<boolean>(false);
 // hai; a;
  constructor( public afAuth: AngularFireAuth) { }
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.loggedIn.next(true);
        resolve(res);
      }, err => reject(err));
    });
  }

  doLogout() {
   // this.loggedInStatus=false;
  //  localStorage.removeItem('key');
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        this.loggedIn.next(false);
        resolve();
      } else {
        reject();
      }
    });
}
setLoggedIn(value: boolean) {

  this.loggedInStatus = value;
  console.log('loggedin' + this.loggedInStatus);
  // localStorage.setItem('key', 'true');
}

getisLoggedIn() {
 // return this.loggedInStatus;
  return this.loggedIn.asObservable();
 // this.a = localStorage.getItem('key');
  // console.log(this.a);
}
// getCurrentUser() {
//   return new Promise<any>((resolve, reject) => {
//     const user = firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         resolve(user);
//       } else {
//         reject('No user logged in');
//       }
//     });
//   });
// }

}
