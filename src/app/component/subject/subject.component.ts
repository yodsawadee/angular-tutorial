import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnDestroy {

  someVar$ = new Subject<number>;

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.someVar = 0;

    this.someVar$.subscribe(it=> {
      this.helperService.someVar += it;
      console.log('this.helperService.someVar = ',this.helperService.someVar);
    });

    this.someVar$.next(1); //do only on first time this.helperService.someVar=101
  }

  clickAdd50() {
    this.someVar$.next(50); //do repeat += 50 ==> this.helperService.someVar=151 +50+50+...
    this.helperService.sendMessage('50');

    // this.helperService.subscribeToApiFailures(() => {
    //   // do something
    //   console.log('>>>>>')
    // });
  }
  clickAdd5() {
    this.someVar$.next(5);
    this.helperService.sendMessage('5');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.someVar$.unsubscribe();
  }
}
