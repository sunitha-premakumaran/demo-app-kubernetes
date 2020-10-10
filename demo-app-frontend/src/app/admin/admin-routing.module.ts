import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

const routes: Routes = [{
  path: '',
  component: AdminDashComponent
}, {
  path: 'dashboard',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
