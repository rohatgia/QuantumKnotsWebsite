import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './aboutpage.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ AboutPageComponent ],
    providers: [ ],
    exports: [ ]
})
export class AboutPageModule { }