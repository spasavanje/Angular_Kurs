import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prva-komponenta',
  templateUrl: './prva-komponenta.component.html',
  styleUrls: ['./prva-komponenta.component.css']
})
export class PrvaKomponentaComponent implements OnInit {

  podsjetnik: string[] = [];
  todo: string = '';

  constructor() { }

  ngOnInit(): void { }

  FunkcijaSnimi(): void {
    this.podsjetnik.push(this.todo);
  }

}
