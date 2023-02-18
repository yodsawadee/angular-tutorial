import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yen-value',
  templateUrl: './yen-value.component.html',
  styleUrls: ['./yen-value.component.scss']
})
export class YenValueComponent implements OnInit {
  @Output() onYenValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() yenValue: string = '';
  constructor() {}

  ngOnInit() {
  }

  async getYenValue(val: string) {
    this.onYenValueChange.emit(val);
  }
}