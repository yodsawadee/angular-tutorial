import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { HelperService } from './service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HelperService]
})
export class AppComponent implements OnInit {
  visible = [false, false, false, false, false, false, false];

  someVar$ = new Subject<number>;

  constructor(
    private helperService: HelperService
    ) { }

  ngOnInit() { 
    this.helperService.someVar = 100;

    this.someVar$.subscribe(it=> {
      // console.log('this.helperService.someVar = ',this.helperService.someVar);
      this.helperService.someVar += it;
    });

    this.someVar$.next(1); //do only on first time this.helperService.someVar=101
  }

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];

    this.someVar$.next(50); //do repeat += 50 ==> this.helperService.someVar=151 +50+50+...

    this.helperService.subscribeToApiFailures(() => {
      // do something
      console.log(this.visible)
    });
  }

}
