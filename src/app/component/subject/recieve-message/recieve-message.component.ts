import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-recieve-message',
  templateUrl: './recieve-message.component.html',
  styleUrls: ['./recieve-message.component.scss']
})
export class RecieveMessageComponent implements OnInit, OnDestroy {

  storeVal: string[] = [];
  message: string = '';
  message2: string = '';
  sub$: Subscription = new Subscription;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.sub$.add(
      this.helperService.recieveMessage().subscribe((it) => {
        if(it !== '') {
          this.message = it;
          this.storeVal.push(it)
          console.log('this.storeVal=',this.storeVal)
          console.log('this.helperService.someVar = ',this.helperService.someVar);
        }
      })
    );

    this.sub$.add(
      this.helperService.recieveMessageFromBehaviorSubject().subscribe((it) => {
        console.log('behaviorSubject message=',it)
        this.message2 = it;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    console.log('ngOnDestroy sub$',this.sub$)
  }

}
