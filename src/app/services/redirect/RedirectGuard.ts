import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: route.data.externalUrl,
    }).click();

    return true;
  }
}
