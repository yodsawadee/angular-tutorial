import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CanActivateGuard } from './page/guard/can-activat.guard';
import { CanDeactivateGuard } from './page/guard/can-deactivate.guard';
import { PageComponent } from './page/page/page.component';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
