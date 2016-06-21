import { RouterConfig } from '@angular/router';
import { PathComponent } from './';

export const PATH_ROUTES: RouterConfig = [
  { path: 'path', component: PathComponent },
  { path: '', component: PathComponent}
];
