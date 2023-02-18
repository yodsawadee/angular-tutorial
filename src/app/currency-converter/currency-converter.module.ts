import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YenValueComponent } from './yen-value/yen-value.component';
import { UsdValueComponent } from './usd-value/usd-value.component';
import { AppComponent } from '../app.component';
import { CurrencyConverterComponent } from './currency-converter.component';



@NgModule({
  declarations: [
    CurrencyConverterComponent,
    YenValueComponent,
    UsdValueComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CurrencyConverterComponent]
})
export class CurrencyConverterModule { }
