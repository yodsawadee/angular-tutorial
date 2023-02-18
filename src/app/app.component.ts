import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HelperService]
})
export class AppComponent implements OnInit {
  visible = [false, false, false, false, false, false, false];

  someVar$ = new Subject<number>;

  constructor(private helperService: HelperService) { }

  ngOnInit() { 
    this.someVar$.subscribe(it=> {
      console.log('this.helperService.someVar = ',this.helperService.someVar);
      this.helperService.someVar += it;
    });


    this.someVar$.next(1);
  }

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

}
