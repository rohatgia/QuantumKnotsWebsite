import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsPageComponent } from './projectspage.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: ProjectsPageComponent,
        children: [ ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
