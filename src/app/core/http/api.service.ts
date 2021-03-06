import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this._httpClient.get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
}
