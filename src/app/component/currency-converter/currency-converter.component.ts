import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent {
  title = "Currency Converter";

  yenValue: number = 0;
  usdValue: number = 0;

  yenValueStr: string = '';
  usdValueStr: string = '';

  usdValueChange(value: string) {
    console.log('usdValueChange =',value)
    this.usdValue = parseInt(value);
    this.yenValue = this.usdValue*110;
    this.yenValueStr = this.yenValue.toString();
  }

  yenValueChange(value: string) {
    console.log('yenValueChange =',value)
    this.yenValue = parseInt(value);
    this.usdValue = this.yenValue*0.0090;
    this.usdValueStr = this.usdValue.toString();
  }
}
