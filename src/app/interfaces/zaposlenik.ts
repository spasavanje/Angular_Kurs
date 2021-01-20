export interface IZaposlenik {
  ime: string;
  starost: number;
  radnoMjesto: string;
}

export class ZaposlenikClass implements IZaposlenik {
  ime: string;
  starost: number;
  radnoMjesto: string;

  constructor() {

    this.ime = "";
    this.radnoMjesto = "";
    this.starost = 18;
  }

  getPunoIme() {
    return `${this.ime} - ${this.radnoMjesto}`
  }

}
