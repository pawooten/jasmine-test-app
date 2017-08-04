import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppTitleService } from './services/app-title-service';
import { AppMessageService } from './services/app-message-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string;
  public serverMessage: string;
  public observableServerMessage: string;
  public currentTimeServerMessage: string;

  constructor( private appTitleService: AppTitleService, private appMessageService: AppMessageService ) {
    this.title = appTitleService.getTitle();
    this.serverMessage = '';
  }

  public onGetMessageClicked() {
    this.serverMessage = this.appMessageService.getMessage();
  }

  public onGetObservableMessageClicked() {
    let observable: Observable<string>;
    observable = this.appMessageService.getObservableMessage();
    observable.subscribe( data => { this.observableServerMessage = data; },
      error => console.log(error),
      () => console.log('The observable stream is complete')
    );
  }

  public onGetObservableCurrentTimeClicked() {
    this.appMessageService.getObservableCurrentTimeMessage().subscribe(
      data => { this.currentTimeServerMessage = data; },
      error => console.log(error),
      () => console.log('The observable stream is complete')
    );
  }
}
