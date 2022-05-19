import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';

const PAGES: any[] = [DashboardPage]

@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, AdminRoutingModule],
    exports: [...PAGES],
    providers: [],
})
export class AdminModule { }