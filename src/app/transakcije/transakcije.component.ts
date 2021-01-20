import { Component, OnInit } from '@angular/core';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-transakcije',
  templateUrl: './transakcije.component.html',
  styleUrls: ['./transakcije.component.css']
})
export class TransakcijeComponent implements OnInit {

  sveTransakcije: any;
  transakcijeZaDisplay: any;
  kategorije: any;
  ukupno: any;

  constructor(private api: GlobalniService) { }

  ngOnInit(): void {
    this.api.getTransakcije().subscribe((rezultati) => {
      this.sveTransakcije = rezultati;
      this.transakcijeZaDisplay = rezultati;
      this.kategorije = [...new Set(this.sveTransakcije.map((transakcija: any) => transakcija.kategorija))];

      this.ukupno = this.sveTransakcije.reduce((total: any, transakcija: any) => {
        total = total + transakcija.iznos;
        return total;
      }, 0);
    });
  }

  Filter(kategorija: string): void {
    this.transakcijeZaDisplay = this.sveTransakcije.filter((transakcija) => transakcija.kategorija === kategorija);
  }

}
