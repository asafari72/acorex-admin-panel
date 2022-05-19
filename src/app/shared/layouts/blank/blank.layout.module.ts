import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayout } from './blank.layout';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlankLayout],
    imports: [CommonModule, RouterModule],
    exports: [BlankLayout],
    providers: [],
})
export class BlankLayoutModule { }