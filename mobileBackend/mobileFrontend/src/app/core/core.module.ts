import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        MatToolbarModule
    ],
    declarations: [FooterComponent, HeaderComponent, NotFoundComponent],
    exports: [
        RouterModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [ ]
})
export class CoreModule { }
