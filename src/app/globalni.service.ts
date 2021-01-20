import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IZaposlenik } from './interfaces/zaposlenik';

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

  public postZaposleni(zaposleni: IZaposlenik): Observable<IZaposlenik> {
    return this.http.post<IZaposlenik>('https://www.angular-kurs.online/api/Zaposlenici', zaposleni)
  }

}
