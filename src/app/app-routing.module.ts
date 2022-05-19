import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayout } from './shared/layouts/master/master.layout';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account/login',
  },
  {
    path: 'admin',
    component: MasterLayout,
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
