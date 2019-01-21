import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../http/api.service';
import { map } from 'rxjs/operators';
import { Lookup } from '..';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private _apiService: ApiService) { }

  getStates(): Observable<Lookup[]> {
    return this._apiService.get('/states').pipe(map(data => data));
  }

  getLivingArrangements(): Observable<Lookup[]> {
    return this._apiService.get('/livingarrangements').pipe(map(data => data));
  }

  getTaxStatus(): Observable<Lookup[]> {
    return this._apiService.get('/taxstatus').pipe(map(data => data));
  }

  getResourceTypes(): Observable<Lookup[]> {
    return this._apiService.get('/resourcetypes').pipe(map(data => data));
  }
}
