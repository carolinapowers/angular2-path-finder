import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {API_ENDPOINT, API_EXTENSION} from '../../constants';
import {Employee} from '../models/employee';

export class Employees {
  private url: string = '';
      
  constructor(private http: Http) {
    this.url = API_ENDPOINT + 'employees' + API_EXTENSION;
  }

  public get(): Observable<Array<Employee>> {   
    return this.http.get(this.url)
      .map(res => res.json());
  }
}