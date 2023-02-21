import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss'],
})
export class TransactionSummaryComponent implements OnInit, OnChanges, DoCheck {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
    this.title = this.title ? this.title: 'title';
    this.subtitle = this.subtitle ? this.subtitle: 'subtitle';
  }
}
