import { Component } from '@angular/core';

import { AppTitleService } from './services/app-title-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;

  constructor( appTitleService: AppTitleService ) {
    this.title = appTitleService.getTitle();
  }
}
