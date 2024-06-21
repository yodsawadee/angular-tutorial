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
import { ApiDataComponent } from './api-data/api-data.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { TransactionSummaryComponent } from './built-in-directives/transaction-summary/transaction-summary.component';
import { UseCustomDirectiveComponent } from './use-custom-directive/use-custom-directive.component';
import { CustomDirectiveDirective } from './use-custom-directive/directive/custom-directive.directive';
import { AttributeDirectiveDirective } from './use-custom-directive/directive/attribute-directive.directive';
import { HostListenerDirectiveDirective } from './use-custom-directive/directive/host-listener-directive.directive';
import { HostBindingDirectiveDirective } from './use-custom-directive/directive/host-binding-directive.directive';
import { UsePipeComponent } from './use-pipe/use-pipe.component';
import { PercentagePipe } from './use-pipe/percentage.pipe';
import { FilterPipe } from './use-pipe/filter.pipe';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    ApiDataComponent,
    BuiltInDirectivesComponent,
    TransactionSummaryComponent,
    UseCustomDirectiveComponent,
    CustomDirectiveDirective,
    AttributeDirectiveDirective,
    HostListenerDirectiveDirective,
    HostBindingDirectiveDirective,
    UsePipeComponent,
    PercentagePipe,
    FilterPipe,
    TableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CurrencyConverterComponent,
    ReactiveFormComponent,
    SubjectComponent,
    ApiDataComponent,
    BuiltInDirectivesComponent,
    UseCustomDirectiveComponent,
    UsePipeComponent,
    TableComponent,
  ]
})
export class ComponentModule { }
