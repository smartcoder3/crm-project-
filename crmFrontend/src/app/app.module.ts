import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LicHflComponent } from './insurance-schemes-list/lic-hfl/lic-hfl.component';
import { LifeInsuranceComponent } from './insurance-schemes-list/life-insurance/life-insurance.component';
import { NationalInsuranceComponent } from './insurance-schemes-list/national-insurance/national-insurance.component';
import { ServicesComponent } from './insurance-schemes-list/services/services.component';
import { TodoComponent } from './insurance-schemes-list/todo/todo.component';

import { LicHflCreateComponent } from './insurance-schemes-create/lic-hfl-create/lic-hfl-create.component';
import { LifeInsuranceCreateComponent } from './insurance-schemes-create/life-insurance-create/life-insurance-create.component';
import { NationalInsuranceCreateComponent } from './insurance-schemes-create/national-insurance-create/national-insurance-create.component';
import { ServicesCreateComponent } from './insurance-schemes-create/services-create/services-create.component';
import { TodoCreateComponent } from './insurance-schemes-create/todo-create/todo-create.component';

import { appRoutes } from './app-routing.module';

import { LicHflEditComponent } from './insurance-schemes-edit/lic-hfl-edit/lic-hfl-edit.component';
import { LifeInsuranceEditComponent } from './insurance-schemes-edit/life-insurance-edit/life-insurance-edit.component';
import { NationalInsuranceEditComponent } from './insurance-schemes-edit/national-insurance-edit/national-insurance-edit.component';
import { ServicesEditComponent } from './insurance-schemes-edit/services-edit/services-edit.component';
import { TodoEditComponent } from './insurance-schemes-edit/todo-edit/todo-edit.component';

import { LicHflDetailComponent } from './insurance-schemes-detail/lic-hfl-detail/lic-hfl-detail.component';
import { LifeInsuranceDetailComponent } from './insurance-schemes-detail/life-insurance-detail/life-insurance-detail.component';
import { NationalInsuranceDetailComponent } from './insurance-schemes-detail/national-insurance-detail/national-insurance-detail.component';
import { ServicesDetailComponent } from './insurance-schemes-detail/services-detail/services-detail.component';
import { TodoDetailComponent } from './insurance-schemes-detail/todo-detail/todo-detail.component';

import { LaughterThreapyCreateComponent } from './insurance-schemes-create/laughter-threapy-create/laughter-threapy-create.component';
import { LaughterThreapyEditComponent } from './insurance-schemes-edit/laughter-threapy-edit/laughter-threapy-edit.component';
import { LaughterThreapyListComponent } from './insurance-schemes-list/laughter-threapy-list/laughter-threapy-list.component';

import { LoginComponent } from './login/login.component';
import { LaughterThreapyDetailComponent } from './insurance-schemes-detail/laughter-threapy-detail/laughter-threapy-detail.component';
import { NationalWarningComponent } from './insurance-warning/national-warning/national-warning.component';
import { FindCustomerComponent } from './insurance-warning/find-customer/find-customer.component';
import { CustomerComponent } from './insurance-warning/customer/customer.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthGuard } from './authGurd/auth.guard';
import { AuthInterceptor } from './authGurd/auth.interceptor';
import { environment } from '../environments/environment';


// const config = {
//   apiKey: 'AIzaSyAdTsKA5pk97dsRUc1ePXUXsYrbLAmQSJ8',
//   authDomain: 'authapp-f388b.firebaseapp.com',
//   databaseURL: 'https://authapp-f388b.firebaseio.com',
//   projectId: 'authapp-f388b',
//   storageBucket: 'authapp-f388b.appspot.com',
//   messagingSenderId: '888720237169'
// };

@NgModule({
  declarations: [
    AppComponent,
    LicHflComponent,
    LifeInsuranceComponent,
    NationalInsuranceComponent,
    ServicesComponent,
    TodoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LicHflCreateComponent,
    LifeInsuranceCreateComponent,
    NationalInsuranceCreateComponent,
    ServicesCreateComponent,
    TodoCreateComponent,
    LicHflEditComponent,
    LifeInsuranceEditComponent,
    NationalInsuranceEditComponent,
    ServicesEditComponent,
    TodoEditComponent,
    LicHflDetailComponent,
    LifeInsuranceDetailComponent,
    NationalInsuranceDetailComponent,
    ServicesDetailComponent,
    TodoDetailComponent,
    LaughterThreapyCreateComponent,
    LaughterThreapyEditComponent,
    LaughterThreapyListComponent,
    LoginComponent,
    LaughterThreapyDetailComponent,
    NationalWarningComponent,
    FindCustomerComponent,
    CustomerComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
