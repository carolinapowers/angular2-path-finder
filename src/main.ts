import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { APP_ROUTER_PROVIDERS, AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS])
	.catch(err => console.error(err));
