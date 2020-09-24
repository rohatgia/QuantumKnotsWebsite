import { Component } from '@angular/core';

@Component({
    selector: 'rev-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isDarkTheme: boolean = true;
}