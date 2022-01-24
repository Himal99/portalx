import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureComponent} from "../feature.component";
import {HomeComponent} from "../home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AddProfileComponent} from "./components/addProfile/add-profile.component";

const routes: Routes = [{
  path: '', component: FeatureComponent,
  children: [
    {
      path: 'user-profile', component: ProfileComponent
    },
    {
      path:'add-profile', component: AddProfileComponent

    },
    { path: '', redirectTo: 'profile', pathMatch: 'full' },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
