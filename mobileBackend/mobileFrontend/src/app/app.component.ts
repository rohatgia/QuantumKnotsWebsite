import { Component } from '@angular/core';
import {ProjectService} from './services/project.service';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobileFrontend';
   constructor(private _projectService: ProjectService) {}
   projects = this._projectService.getProject();
}
