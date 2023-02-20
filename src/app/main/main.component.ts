import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [HelperService]
})
export class MainComponent implements OnInit {
  visible = [false, false, false, false, false, false, false];

  someVar$ = new Subject<number>;

  constructor(
    private helperService: HelperService,
    private router: Router
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

  goto() {
    this.router.navigateByUrl('/page');
  }

}