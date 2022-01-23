import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./@core/guards/authGuard";

const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./authorizedComponents/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: '**', redirectTo: 'auth', pathMatch: 'full'
  // },
  {
    path: 'home',
    loadChildren: ()=> import('./@theme/baseLayout/base.module').then(m => m.BaseModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
