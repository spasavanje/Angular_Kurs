import { Component, OnInit } from '@angular/core';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {

  sveDrzave: any;
  terminZaPretragu: string = '';

  constructor(private api: GlobalniService) { }

  ngOnInit(): void {

    this.api.getDrzave().subscribe((rezultat) => {
      this.sveDrzave = rezultat;
      console.log(rezultat);
    }, error => console.log('Došlo je do greške, molimo Vas pokušajte ponovo'));
  }

  Pretrazi(): void {
    this.api.pretraziDrzave(this.terminZaPretragu).subscribe((rezultat) => {
      this.sveDrzave = rezultat;
    });
  }

}
