import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { SeleccionadosComponent } from './seleccionados/seleccionados.component';
import { CommonModule } from '@angular/common';
import { grupos } from './data/grupos';
import { Jugador } from './data/grupos';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    JugadoresComponent,
    SeleccionadosComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarFormulario = false;
  grupoActual = grupos.find(g => g.nombre === 'demo')!;

  jugadorNuevo: Jugador = {
    nombre: '',
    apellido: '',
    disponible: true,
    puntuacionAtaque: 0,
    puntuacionCreacion: 0,
    puntuacionDefensa: 0,
    puntuacionPortero: 0
  };

  onMostrarFormulario() {
    this.mostrarFormulario = true;
  }

  agregarJugador() {
    this.grupoActual.jugadores.push({ ...this.jugadorNuevo });
    this.resetearFormulario();
  }

  resetearFormulario() {
    this.jugadorNuevo = {
      nombre: '',
      apellido: '',
      disponible: true,
      puntuacionAtaque: 0,
      puntuacionCreacion: 0,
      puntuacionDefensa: 0,
      puntuacionPortero: 0
    };
    this.mostrarFormulario = false;
  }
  seleccionados: Jugador[] = [];

  alSeleccionarJugador(jugador: Jugador) {
    const yaEsta = this.seleccionados.some(
      j => j.nombre === jugador.nombre && j.apellido === jugador.apellido
    );
    if (!yaEsta) {
      this.seleccionados.push(jugador);
    }
  }
  
  alDesmarcarJugador(jugador: Jugador) {
    this.seleccionados = this.seleccionados.filter(
      j => j.nombre !== jugador.nombre || j.apellido !== jugador.apellido
    );
  }
  

}