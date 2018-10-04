import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from '../homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from '../aboutme/aboutme.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'projects',
        loadChildren: '../projectspage/projectspage.module#ProjectsPageModule'
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'about',
        component: AboutMeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
