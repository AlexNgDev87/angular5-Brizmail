import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:51296/api/email';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf=-8' });
  }

  public send(payload) {
    let response = this.http.post(this.accessPointUrl + '/send', payload, {headers: this.headers});
    return response;
  }
}
