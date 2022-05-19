import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayout } from './master.layout';
import { RouterModule } from '@angular/router';
import { AXButtonModule, AXDecoratorModule, AXDrawerModule, AXAvatarModule } from '@acorex/components';

const MODULES: any = [AXDrawerModule, AXButtonModule, AXDecoratorModule,AXAvatarModule];

@NgModule({
    declarations: [MasterLayout],
    imports: [CommonModule, RouterModule, ...MODULES],
    exports: [MasterLayout],
    providers: [],
})
export class MasterLayoutModule { }