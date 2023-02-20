import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PageComponent } from './page/page.component';
import { CanActivateGuard } from './guard/can-activat.guard';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: 'page',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class PageRoutingModule { }
