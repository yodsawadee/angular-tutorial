import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page/page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CanDeactivateService } from './guard/can-deactivate.service';
import { PageRoutingModule } from './page-routing.module';


@NgModule({
  declarations: [
    PageComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  providers: [CanDeactivateService],
  exports: [
    PageComponent,
    Page1Component,
    Page2Component,
  ]
})
export class PageModule { }
