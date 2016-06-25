import { provideRouter, RouterConfig } from '@angular/router';
import { PATH_ROUTES } from './+path';
import { EMPLOYEES_ROUTES } from './+employees';

export const routes: RouterConfig = [
  ...EMPLOYEES_ROUTES,
  ...PATH_ROUTES
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
