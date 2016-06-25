import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environment';
import {Printer} from '../models/printer';

export class Printers {
  private url: string = '';

  constructor(private http: Http) {
    this.url = environment.apiEndpoint + 'printers' + environment.apiExtension;
  }

  public get(): Observable<Array<Printer>> {
    return this.http.get(this.url)
      .map(res => res.json());
  }
}
