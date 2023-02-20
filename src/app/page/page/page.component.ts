import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivateService } from '../guard/can-deactivate.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  //  implements OnDestroy {
  // constructor(private deactivateService: CanDeactivateService) {
  //   console.log('>> PageComponent')
  // }

  // ngOnDestroy() {}

  // canDeactivate(): Observable<boolean> {
  //   return this.deactivateService.canDeactivate();
  // }
}