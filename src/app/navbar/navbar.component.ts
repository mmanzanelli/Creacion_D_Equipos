import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent {
  @Output() agregarJugador = new EventEmitter<void>();
  @Output() grupoCambiado = new EventEmitter<string>();
  @Output() reiniciar = new EventEmitter<void>();
  @Output() jugadoresPorEquipoCambiado = new EventEmitter<number>();
  @Output() armarEquipos = new EventEmitter<void>();



  grupoSeleccionado = 'demo'; // por defecto
  jugadoresPorEquipo = 8;     // valor inicial

  mostrarMenuJugadores = false;
  jugadoresOpciones = [7, 8, 9, 10, 11];


  onClickAgregar() {
    this.agregarJugador.emit();
  }
  gruposDisponibles: string[] = ['demo', 'grupo 1', 'grupo 2', 'grupo 3'];
  mostrarMenuGrupo = false;
  
  seleccionarGrupo() {
    this.mostrarMenuGrupo = !this.mostrarMenuGrupo;
  }
  
  
  cambiarGrupo(nombre: string) {
    this.grupoSeleccionado = nombre;
    this.mostrarMenuGrupo = false;
    this.grupoCambiado.emit(nombre); // ← aquí enviamos el grupo al componente padre
  }
  

  resetearDatos() {
    this.reiniciar.emit();
  }

  toggleMenuJugadores() {
    this.mostrarMenuJugadores = !this.mostrarMenuJugadores;
  }
  seleccionarCantidadJugadores(cantidad: number) {
    this.jugadoresPorEquipo = cantidad;
    this.mostrarMenuJugadores = false;
    this.jugadoresPorEquipoCambiado.emit(cantidad);
  }
  
  onArmarEquipos() {
    this.armarEquipos.emit();
  }
  
  
}
