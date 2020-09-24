import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing-module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatNativeDateModule, MaticonModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatNativeDateModule,
        FormsModule,
        FlexLayoutModule
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