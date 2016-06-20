import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {API_ENDPOINT, API_EXTENSION} from '../../constants';
import {Printer} from '../models/printer';

export class Printers {
  private url: string = '';
      
  constructor(private http: Http) {
    this.url = API_ENDPOINT + 'printers' + API_EXTENSION;
  }

  public get(): Observable<Array<Printer>> {   
    return this.http.get(this.url)
      .map(res => res.json());
  }
}