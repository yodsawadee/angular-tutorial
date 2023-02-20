import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CanDeactivateGuard } from './page/guard/can-deactivate.guard';
import { PageModule } from './page/page.module';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'page', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },
  // { path: '**', component: AppComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [CanDeactivateGuard],
})
export class AppRoutingModule { }
