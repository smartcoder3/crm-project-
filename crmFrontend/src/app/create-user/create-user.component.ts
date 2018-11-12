import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/Authservice/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user; registerForm: FormGroup;
  errorMessage: String = '';
  successMessage: String = '';
  constructor( public authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
      this.createForm();
     }
       createForm() {
       this.registerForm = this.fb.group({
         email: ['', Validators.required ],
         password: ['', Validators.required]
       });
     }

  tryRegister(value) {
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
      alert(this.successMessage);
      this.router.navigate(['\login']);
    }, err => {
      console.log(err);

      this.errorMessage = err.message;
      this.successMessage = '';
   alert(this.errorMessage);
    });
  }
  ngOnInit() {
    this.user = prompt('Enter Your Code TO create User!');
    if (this.user !== 'true') {
      this.router.navigate(['/login']);
    }
  }

}
