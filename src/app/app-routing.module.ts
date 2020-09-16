import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisComponent } from './user/regis/regis.component';
import { ChengepasswordComponent } from './user/chengepassword/chengepassword.component';
import { VerifyComponent } from './user/verify/verify.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'user',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisComponent
      },
      {
        path: 'verify',
        component: VerifyComponent
      },
      {
        path: 'chenge',
        component: ChengepasswordComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
