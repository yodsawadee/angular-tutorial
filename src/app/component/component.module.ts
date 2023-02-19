import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { YenValueComponent } from './currency-converter/yen-value/yen-value.component';
import { UsdValueComponent } from './currency-converter/usd-value/usd-value.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ErrorMsgComponent } from './reactive-form/error-msg/error-msg.component';
import { SendMessageComponent } from './subject/send-message/send-message.component';
import { RecieveMessageComponent } from './subject/recieve-message/recieve-message.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    YenValueComponent,
    UsdValueComponent,
    ReactiveFormComponent,
    ErrorMsgComponent,
    SubjectComponent,
    SendMessageComponent,
    RecieveMessageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CurrencyConverterComponent,ReactiveFormComponent,SubjectComponent]
})
export class ComponentModule { }
