import {Injectable} from '@angular/core';

@Injectable()
export class AppTitleService {
  getTitle(): string {
    return 'Jasmine Test App (Real)';
  }
}
