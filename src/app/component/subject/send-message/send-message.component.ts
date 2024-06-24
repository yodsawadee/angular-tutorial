import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit, OnDestroy {

  message: string = '';
  sub$: Subscription = new Subscription;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.helperService.recieveMessageFromBehaviorSubject().subscribe((it) => {
      console.log('behaviorSubject message=',it)
      this.message = it;
    })
  }

  sendMessage(msg: string) {
    this.helperService.sendMessage(msg);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    console.log('ngOnDestroy sub$',this.sub$)
  }
}
