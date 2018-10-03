import { Component, OnInit } from '@angular/core';

 import {ProjectService} from '../core/services/project.service';
 import {Project} from '../shared/models/project.model';
 import { Observable } from 'rxjs';

@Component({
    selector: 'abe-projectspage',
    templateUrl: './projectspage.component.html',
    styleUrls: ['./projectspage.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  title = 'mobileFrontend';
  private projects: Project[] = [];
  private projectsObservable: Observable<Project[]>;
  constructor(private projectService: ProjectService) {
    this.projectService.getProject().subscribe((res: Project[]) => {
      this.projects = res;
    });
  }

    ngOnInit() { }
}
