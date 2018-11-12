import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
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

export const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },

  // list
  {
    path: 'home', component: HomeComponent, canActivate : [AuthGuard]
  },
  {
    path: 'lichfl', component: LicHflComponent, canActivate : [AuthGuard]
  },
  {
    path: 'lifeinsurance', component: LifeInsuranceComponent, canActivate : [AuthGuard]
  },
  {
    path: 'nationalinsurance', component: NationalInsuranceComponent, canActivate : [AuthGuard]
  },
  {
    path: 'services', component: ServicesComponent, canActivate : [AuthGuard]
  },
  {
    path: 'todo', component: TodoComponent, canActivate : [AuthGuard]
  },
  {
    path: 'laughterthreapy', component: LaughterThreapyListComponent, canActivate : [AuthGuard]
  },


  // create

  {
    path: 'lichfl/create', component: LicHflCreateComponent, canActivate : [AuthGuard]
  },
  {
    path: 'lifeinsurance/create', component: LifeInsuranceCreateComponent, canActivate : [AuthGuard]
  },
  {
    path: 'nationalinsurance/create', component: NationalInsuranceCreateComponent, canActivate : [AuthGuard]
  },
  {
    path: 'services/create', component: ServicesCreateComponent, canActivate : [AuthGuard]
  },
  {
    path: 'todo/create', component: TodoCreateComponent, canActivate : [AuthGuard]
  },
  {
    path: 'laughterthreapy/create', component: LaughterThreapyCreateComponent, canActivate : [AuthGuard]
    },

  // detail
  {
    path: 'lichfl/detail/:id', component: LicHflDetailComponent, canActivate : [AuthGuard]
  },
  {
    path: 'lifeinsurance/detail/:id', component: LifeInsuranceDetailComponent, canActivate : [AuthGuard]
  },
  {
    path: 'nationalinsurance/detail/:id', component: NationalInsuranceDetailComponent, canActivate : [AuthGuard]
  },
  {
    path: 'services/detail/:id', component: ServicesDetailComponent, canActivate : [AuthGuard]
  },
  {
    path: 'todo/detail/:id', component: TodoDetailComponent, canActivate : [AuthGuard]
  },
  {
    path: 'laughterthreapy/detail/:id', component: LaughterThreapyDetailComponent, canActivate : [AuthGuard]
  },
  // edit

  {
    path: 'lichfl/edit/:id', component: LicHflEditComponent, canActivate : [AuthGuard]
  },
  {
    path: 'lifeinsurance/edit/:id', component: LifeInsuranceEditComponent, canActivate : [AuthGuard]
  },
  {
    path: 'nationalinsurance/edit/:id', component: NationalInsuranceEditComponent, canActivate : [AuthGuard]
  },
  {
    path: 'services/edit/:id', component: ServicesEditComponent, canActivate : [AuthGuard]
  },
  {
    path: 'todo/edit/:id', component: TodoEditComponent, canActivate : [AuthGuard]
  },
  {
    path: 'laughterthreapy/edit/:id', component: LaughterThreapyEditComponent, canActivate : [AuthGuard]
  },
  // warnings
  {
    path: 'nationalinsurance/warning', component: NationalWarningComponent, canActivate : [AuthGuard]
  },
  {
    path: 'birthdays', component: FindCustomerComponent, canActivate : [AuthGuard]
  },
  // Main Page
  // {
  //   path: 'dashboard', component: CustomerComponent, canActivate : [AuthGuard]
  // },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
   },
  {
    path: 'login', component: LoginComponent
  },
// CreateUser
  {
    path: 'createuser', component: CreateUserComponent, canActivate : [AuthGuard]
  }
];
