import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTitleService } from './services/app-title-service';
import { AppMessageService } from './services/app-message-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ AppTitleService, AppMessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
