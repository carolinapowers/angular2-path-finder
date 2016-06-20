import { provideRouter, RouterConfig } from '@angular/router';
import { PathComponent } from './path/path.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: RouterConfig = [
	{ path: '/path', component: PathComponent },
	{ path: '/employees', component: EmployeesComponent}
	
];
export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];