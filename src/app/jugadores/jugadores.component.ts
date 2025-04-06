import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jugador } from '../data/grupos';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {
  @Input() jugadores: Jugador[] = [];
  @Input() seleccionados: Jugador[] = [];

  @Output() seleccionar = new EventEmitter<Jugador>();
  @Output() longClick = new EventEmitter<Jugador>();

  presionando: Jugador | null = null;



  seleccionarJugador(jugador: Jugador) {
    this.seleccionar.emit(jugador);
  }

  estaSeleccionado(jugador: Jugador): boolean {
    return this.seleccionados.some(
      j => j.nombre === jugador.nombre && j.apellido === jugador.apellido
    );
  }

  longPressTimeout: any;

onMouseDown(jugador: Jugador) {
  this.presionando = jugador;
  this.longPressTimeout = setTimeout(() => {
    this.longPressTimeout = null;
    this.longClick.emit(jugador);
    this.presionando = null;
  }, 800);
}

onMouseUp(jugador: Jugador) {
  if (this.longPressTimeout) {
    clearTimeout(this.longPressTimeout);
    this.seleccionarJugador(jugador);
    this.presionando = null;
  }
}


  
}
