import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPage } from './pages/dashboard/dashboard.page';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
