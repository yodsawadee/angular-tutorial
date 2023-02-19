import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss'],
})
export class TransactionSummaryComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
