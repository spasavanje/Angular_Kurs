import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalniService {

  constructor(private http: HttpClient) { }

  public getZaposlenici() {
    return this.http.get('https://www.angular-kurs.online/api/zaposlenici');
  }

  public getTransakcije() {
    return this.http.get('https://www.angular-kurs.online/api/transakcije');
  }

  public getDrzave() {
    return this.http.get('https://www.angular-kurs.online/api/drzave');
  }

  public pretraziDrzave(terminZaPretragu: string) {
    return this.http.get('https://www.angular-kurs.online/api/drzave/' + terminZaPretragu);
  }

}
