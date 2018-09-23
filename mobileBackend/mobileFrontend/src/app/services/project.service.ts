import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Project} from '../models/project.model';

@Injectable()
export class ProjectService {
    constructor(private http: Http) {}

    getProject(): Observable<Project[]> {
        return this.http.get('localhost:8000/fetch_projects?format=api')
        .pipe(map((res: Response) => res.json().response.map((project: Project) => new Project().deserialize(project))));
    }
}
