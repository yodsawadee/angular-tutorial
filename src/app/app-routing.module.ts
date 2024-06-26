import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CanDeactivateGuard } from './page/guard/can-deactivate.guard';
import { PageModule } from './page/page.module';
import { PortfolioComponent } from './portfolio/portfolio.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: PortfolioComponent },
  { path: 'main', component: MainComponent },
  { path: 'page', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },
  { path: '**', component: PortfolioComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: [CanDeactivateGuard],
})
export class AppRoutingModule { }
