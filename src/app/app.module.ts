import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { SeleccionadosComponent } from './seleccionados/seleccionados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JugadoresComponent,
    SeleccionadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
