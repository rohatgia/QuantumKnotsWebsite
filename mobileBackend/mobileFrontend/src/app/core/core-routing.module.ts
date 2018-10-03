import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        loadChildren: '../projectspage/projectspage.module#ProjectsPageModule'
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
