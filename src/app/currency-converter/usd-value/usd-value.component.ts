import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usd-value',
  templateUrl: './usd-value.component.html',
  styleUrls: ['./usd-value.component.scss']
})
export class UsdValueComponent implements OnInit {
  @Output() onUsdValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() usdValue: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  getUsdValue(val: string) {
    this.onUsdValueChange.emit(val)
  }
}
