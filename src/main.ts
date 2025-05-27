import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//tells that there is an appcomponent and shold look for that app component tag
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
