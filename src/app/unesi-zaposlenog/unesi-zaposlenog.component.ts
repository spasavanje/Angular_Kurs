import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalniService } from '../globalni.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unesi-zaposlenog',
  templateUrl: './unesi-zaposlenog.component.html',
  styleUrls: ['./unesi-zaposlenog.component.css']
})
export class UnesiZaposlenogComponent implements OnInit {

  zaposlenik: FormGroup
  porukaZaKorisnika: string;
  constructor(private api: GlobalniService, private router: Router) { }

  ngOnInit(): void {
    this.zaposlenik = new FormGroup({
      ime: new FormControl('', [Validators.required]),
      starost: new FormControl('', Validators.required),
      radnoMjesto: new FormControl('', Validators.required)
    })
  }

  onSubmit(zaposlenik) {
    console.log(zaposlenik.value);
    this.api.postZaposleni(zaposlenik.value).subscribe((data) => {
      console.log(data)
      this.porukaZaKorisnika = "Uspješno ste unijeli novog zaposlenog"
      setTimeout(() => {
        this.router.navigate(['zaposleni'])
      }, 3000);
    },
      error => this.porukaZaKorisnika = "Dogodila se greška, molimo pokušajte ponovo");
  }

}
