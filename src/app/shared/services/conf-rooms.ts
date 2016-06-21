import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environment';
import {ConfRoom} from '../models/conf-room';

export class ConfRooms {
  private url: string = '';

  constructor(private http: Http) {
    this.url = environment.apiEndpoint + 'confroom' + environment.apiExtension;
  }

  public get(): Observable<Array<ConfRoom>> {
    return this.http.get(this.url)
      .map(res => res.json());
  }
}
