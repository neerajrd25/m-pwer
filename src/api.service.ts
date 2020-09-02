import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string;
  url: string;
  constructor(public http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  public get(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = { params: new HttpParams() };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(`${this.url}/${endpoint}`, reqOpts);
  }

  public post(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.post(
      `${this.url}/${endpoint}`,
      body,
      reqOpts
    );
  }

  public put(endpoint: string, params: any, body: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = { params: new HttpParams() };
    }
    // Support easy query params for GET requests

    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.put(`${this.url}/${endpoint}`, body, reqOpts);
  }

  public delete(endpoint: string, reqOpts?: any): Observable<any> {
    return this.http.delete(`${this.url}/${endpoint}`, reqOpts);
  }

  public patch(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.patch(
      `${this.url}/${endpoint}`,
      body,
      reqOpts
    );
  }

  // public downloadFile(endpoint: string, params?: any, reqOpts?: any) {
  //   if (!reqOpts) {
  //     reqOpts = { params: new HttpParams() };
  //   }

  //   // Support easy query params for GET requests
  //   if (params) {
  //     reqOpts.params = new HttpParams();
  //     for (const k in params) {
  //       if (params.hasOwnProperty(k)) {
  //         reqOpts.params = reqOpts.params.set(k, params[k]);
  //       }
  //     }
  //   }
  //   return this.http.get<Blob>(`${this.url}/${endpoint}`, { observe: 'response', responseType: 'blob' as 'json', params: reqOpts.params })
  // }
}
