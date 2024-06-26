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
  message2: string = '';

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {}

  sendMessage(msg: string, type: number) {
    if (type === 1) {
      this.helperService.sendMessage(msg);
    } else {
      this.helperService.sendBehaviorSubjectMessage(msg);
    }
  }

  ngOnDestroy(): void {}
}
