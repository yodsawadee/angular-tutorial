import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateService {
  constructor() {}

  canDeactivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (observer) {
        console.log('observer=', observer)
        observer.next(true);
      } else {
        // observer.next(true);
      }
    });
  }
}
