import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppMessageService {
  private webSocket: WebSocket;

  getMessage(): string {
     return 'This is a hardcoded message from AppMessageService';
  }

  getObservableMessage(): Observable<string> {
    return this.getObservable('ws://localhost:8085');
  }

  getObservableCurrentTimeMessage(): Observable<string> {
    return this.getObservable('ws://localhost:8085/CurrentTime');
  }

  private getObservable(url: string): Observable<string> {
    this.webSocket = new WebSocket( url );
    return new Observable<string>( observer => {
      this.webSocket.onmessage = (event) => observer.next(event.data);
      this.webSocket.onerror = (event) => observer.error(event);
      this.webSocket.onclose = (evnet) => observer.complete();
    });
  }
}
