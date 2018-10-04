import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { HomePageModule } from '../homepage/homepage.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeModule } from '../aboutme/aboutme.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';

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
        HomePageModule,
        AboutMeModule,
        PdfViewerModule,
        FormsModule
    ],
    declarations: [FooterComponent, HeaderComponent, NotFoundComponent, ResumeComponent],
    exports: [
        RouterModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [ ]
})
export class CoreModule { }
