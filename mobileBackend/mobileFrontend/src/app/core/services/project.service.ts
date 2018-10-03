import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
    constructor(private httpClient: HttpClient) {}

    getProject() {
        return this.httpClient.get('http://localhost:8000/fetch_projects?format=json');
    }
}
