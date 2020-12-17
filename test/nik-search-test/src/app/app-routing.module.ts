import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('@pages/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('@pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
