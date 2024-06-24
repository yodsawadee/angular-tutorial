import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-usd-value',
  templateUrl: './usd-value.component.html',
  styleUrls: ['./usd-value.component.scss']
})
export class UsdValueComponent implements OnInit, OnChanges {
  @Output() onUsdValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() usdValue: string = '';

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.usdValue) {
      console.log('ngOnChanges Input usdValue=', this.usdValue);
    }
  }

  ngOnInit() {
  }

  getUsdValue(val: string) {
    console.log('getUsdValue=',val)
    this.onUsdValueChange.emit(val)
  }
}
