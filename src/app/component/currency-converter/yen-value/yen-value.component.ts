import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-yen-value',
  templateUrl: './yen-value.component.html',
  styleUrls: ['./yen-value.component.scss']
})
export class YenValueComponent implements OnInit, OnChanges {
  @Output() onYenValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() yenValue: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.yenValue) {
      console.log('ngOnChanges Input yenValue=', this.yenValue);
    }
  }

  ngOnInit() {
  }

  getYenValue(val: string) {
    console.log('getYenValue=',val)
    this.onYenValueChange.emit(val);
  }
}