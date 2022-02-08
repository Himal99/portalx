import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseLayoutComponent} from "./base-layout/base-layout.component";
import {HomeComponent} from "../../feature/home/home.component";
import {FeatureComponent} from "../../feature/feature.component";

const routes: Routes = [{
  path: '',
  component: BaseLayoutComponent,
  children:[{
      path: '', component: HomeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
