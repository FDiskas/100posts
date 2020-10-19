import { Component, Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-side-bar',
  template: '',
})
export class RedirectGuardComponent implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: route.data.externalUrl,
    }).click();

    return true;
  }
}
