import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(public router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // console.log('state.url=', state.url)

    // if (state.url === `/${'/page'}`) {
    //   this.router.navigate(['/page']);
    //   return false;
    // }
    alert('canActivate: go to '+state.url);
    return true;
  }
}
