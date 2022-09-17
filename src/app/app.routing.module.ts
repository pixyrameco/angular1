import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Navigator} from "./Navigator/navigator.component";
import {Summary} from "./Summary/summary.component";
import jsonData from "./Data"
import data from "./Data";

let sharedData = data()

const routes: Routes = [
  { path: 'navigator', component: Navigator, data: sharedData},
  { path: '', component: Summary, data: sharedData},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
