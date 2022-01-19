import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureComponent} from "./feature.component";
import * as path from "path";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path: '', component: FeatureComponent,
children: [
  {
    path: 'home', component: HomeComponent
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
