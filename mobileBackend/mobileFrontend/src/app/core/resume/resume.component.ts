import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'abe-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    pdfSrc = '../../assets/resume.pdf';
    constructor() { }

    ngOnInit() {
    }
}
