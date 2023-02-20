import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './guard/can-activat.guard';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { PageComponent } from './page/page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: 'page1',
        component: Page1Component,
      },
      {
        path: 'page2',
        component: Page2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PageRoutingModule { }
