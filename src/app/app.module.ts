import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { PageModule } from './page/page.module';
import { HelperService } from './service/helper.service';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule,
    ComponentModule,
    PageModule
  ],
  providers: [HelperService, DecimalPipe, DatePipe],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : []
})
export class AppModule { }
