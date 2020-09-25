//sourced from: https://stackoverflow.com/questions/47502811/create-progress-bar-loading-effect-for-every-http-request

import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
    static showPreLoader() {
        document.getElementById('preloader').style.display = 'block';
    }
    static hidePreLoader() {
        document.getElementById('preloader').style.display = 'none';
    }
}