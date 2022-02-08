import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureComponent} from "./feature.component";
import {HomeComponent} from "./home/home.component";
import {AddProfileComponent} from "./profile/components/addProfile/add-profile.component";

const routes: Routes = [{
  path: '', component: FeatureComponent,
children: [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'profile',
    loadChildren: ()=>import('./profile/profile.module').then(m=> m.ProfileModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
