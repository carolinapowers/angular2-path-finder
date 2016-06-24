import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environment';
import {Employee} from '../models/employee';

@Injectable()
export class EmployeesService {
  private url: string = '';

  constructor(private http: Http) {
    this.url = environment.apiEndpoint + 'employees' + environment.apiExtension;
  }

  getEmployees() {
    return this.http.get(this.url)
      .map(res => res.json())
      .toPromise();
  }
}
