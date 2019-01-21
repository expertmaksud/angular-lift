import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../http/api.service';
import { map } from 'rxjs/operators';
import { Resource } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ScreenerResourceService {

  constructor(private _apiService: ApiService) { }

  getResourcesByType(typeId): Observable<Resource[]> {
    return this._apiService.get('/resources?resourceType=' + typeId).pipe(map(data => data));
  }
}
