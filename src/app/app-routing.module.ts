import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantsComponent } from './plants.component';

const routes: Routes = [
  { path: '', redirectTo: 'plants', pathMatch: 'full' },
  { path: 'plants', component: PlantsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
