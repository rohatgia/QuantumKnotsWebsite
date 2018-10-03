import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import {ProjectService} from '../core/services/project.service';
import { ProjectsPageComponent } from './projectspage.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
       HttpClientModule,
       SharedModule,
       ProjectsRoutingModule
    ],
    declarations: [ ProjectsPageComponent ],
    providers: [ ProjectService ],
    exports: [ ]
})
export class ProjectsPageModule { }
