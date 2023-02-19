import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {}

  sendMessage(msg: string) {
    this.helperService.sendMessage(msg);
  }

}
