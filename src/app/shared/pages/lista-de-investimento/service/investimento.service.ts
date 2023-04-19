import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {

  private url = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653';

  constructor(private http: HttpClient) { }

  getInvestimentos(): Observable<any> {
    return this.http.get(this.url);
  }

}
