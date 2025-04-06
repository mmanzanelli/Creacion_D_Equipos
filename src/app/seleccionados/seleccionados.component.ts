import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jugador } from '../data/grupos';

@Component({
  selector: 'app-seleccionados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seleccionados.component.html',
  styleUrls: ['./seleccionados.component.css']
})
export class SeleccionadosComponent {
  @Input() jugadores: Jugador[] = [];
}
