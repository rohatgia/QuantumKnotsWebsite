import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './aboutme.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ AboutMeComponent ],
    providers: [ ],
    exports: [ ]

})
export class AboutMeModule { }
