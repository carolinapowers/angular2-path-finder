import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environment';
import {Employee} from '../models/employee';

@Injectable()
export class EmployeesService {
  private url: string = '';

  constructor(private http: Http) {
    this.url = environment.apiEndpoint + 'employees' + environment.apiExtension;
  }

  public get(): Observable<Array<Employee>> {
    return this.http.get(this.url)
      .map(res => res.json());
  }
}
