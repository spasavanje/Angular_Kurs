import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PrvaKomponentaComponent } from './prva-komponenta/prva-komponenta.component';
import { DrugaKomponentaComponent } from './druga-komponenta/druga-komponenta.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { HttpClientModule } from '@angular/common/http';
import { TransakcijeComponent } from './transakcije/transakcije.component';
import { DrzaveComponent } from './drzave/drzave.component';

@NgModule({
  declarations: [
    AppComponent,
    PrvaKomponentaComponent,
    DrugaKomponentaComponent,
    ZaposleniComponent,
    TransakcijeComponent,
    DrzaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
