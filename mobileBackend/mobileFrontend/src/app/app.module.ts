import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';

// import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCardModule } from '@angular/material/card';


// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
// import {ProjectService} from './services/project.service';

@NgModule({
  declarations: [
    AppComponent
     // HeaderComponent,
     // FooterComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // new modules added here
    // MatToolbarModule,
    // MatCardModule,
    // HttpClientModule
  ],
  providers: [// ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
