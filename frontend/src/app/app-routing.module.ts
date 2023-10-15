import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowSeatsComponent } from './show-seats/show-seats.component';

const routes: Routes = [
  { path: '', component: ShowSeatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
