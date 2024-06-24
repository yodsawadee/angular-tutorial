import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-recieve-message',
  templateUrl: './recieve-message.component.html',
  styleUrls: ['./recieve-message.component.scss']
})
export class RecieveMessageComponent implements OnInit, OnDestroy {

  message: string = '';
  sub$: Subscription = new Subscription;
  // destroy$ = new Subject<void>();

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    // this.helperService.recieveMessage().subscribe((it) => {
    //   this.message = it;
    //   console.log('message=',it)
    // })
    this.helperService.recieveMessageFromBehaviorSubject().subscribe((it) => {
      console.log('behaviorSubject message=',it)
      this.message = it;
    })
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
    this.sub$.unsubscribe();
    console.log('ngOnDestroy sub$',this.sub$)
  }

}
