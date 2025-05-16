import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { SeleccionadosComponent } from './seleccionados/seleccionados.component';
import { CommonModule } from '@angular/common';
import { grupos } from './data/grupos';
import { Jugador } from './data/grupos';
import { Grupo } from './data/grupos';
import { FormsModule } from '@angular/forms';


const STORAGE_KEY = 'grupos';


function cargarGrupos(): Grupo[] {
  const guardado = localStorage.getItem(STORAGE_KEY);
  return guardado ? JSON.parse(guardado) : grupos; // `grupos` es la constante de respaldo
}

function guardarGrupos(data: Grupo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}


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
  todosLosGrupos = cargarGrupos();
  grupoActual = this.todosLosGrupos.find(g => g.nombre === 'demo')!;


  jugadorNuevo: Jugador = {
    nombre: '',
    apellido: '',
    disponible: true,
    puntuacionAtaque: 0,
    puntuacionCreacion: 0,
    puntuacionDefensa: 0,
    puntuacionPortero: 0
  };
  equipos: Jugador[][] = [];


  onMostrarFormulario() {
    this.mostrarFormulario = true;
  }

  agregarJugador() {
    this.grupoActual.jugadores.push({ ...this.jugadorNuevo });
    guardarGrupos(this.todosLosGrupos); // ← nuevo
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
  
  cambiarGrupo(nombre: string) {
    let grupo = this.todosLosGrupos.find(g => g.nombre === nombre);
    if (!grupo) {
      // Si el grupo no existe, lo creamos vacío
      grupo = {
        nombre: nombre,
        jugadores: []
      };
      this.todosLosGrupos.push(grupo);
      guardarGrupos(this.todosLosGrupos);
    }
  
    this.grupoActual = grupo;
    this.seleccionados = [];
  }
  
  
  resetearGrupos() {
    localStorage.removeItem('grupos');
    location.reload(); // Recarga la app desde cero
  }

  jugadoresPorEquipo = 8; // valor inicial

  cambiarJugadoresPorEquipo(cantidad: number) {
    this.jugadoresPorEquipo = cantidad;
}

armarEquipos() {
  if (this.seleccionados.length === 0) {
    alert('No hay jugadores seleccionados.');
    return;
  }

  const formacion = FORMACIONES[this.jugadoresPorEquipo];
  if (!formacion) {
    alert('Formación no definida para esta cantidad de jugadores.');
    return;
  }

  const jugadoresDisponibles = [...this.seleccionados]; // ahora una única lista
  const equipo1: Jugador[] = [];
  const equipo2: Jugador[] = [];

  let turno = true; // true: equipo1, false: equipo2

  // Función para asignar jugadores para un rol específico
  const asignarPorRol = (comparador: (a: Jugador, b: Jugador) => number, cantidad: number) => {
    for (let i = 0; i < cantidad * 2; i++) {
      jugadoresDisponibles.sort(comparador);
      const jugador = jugadoresDisponibles.shift();
      if (!jugador) break;
      if (turno) {
        equipo1.push(jugador);
      } else {
        equipo2.push(jugador);
      }
      turno = !turno;
    }
  };

  // Asignar defensas
  asignarPorRol((a, b) => b.puntuacionDefensa - a.puntuacionDefensa, formacion.defensas);

  // Asignar mediocampistas
  asignarPorRol((a, b) => b.puntuacionCreacion - a.puntuacionCreacion, formacion.medios);

  // Asignar delanteros
  asignarPorRol((a, b) => b.puntuacionAtaque - a.puntuacionAtaque, formacion.delanteros);

  this.equipos = [equipo1, equipo2];

  console.log('Equipo 1:', equipo1);
  console.log('Equipo 2:', equipo2);

  // Asignar jugadores sobrantes
while (jugadoresDisponibles.length > 0) {
  const jugador = jugadoresDisponibles.shift();
  if (!jugador) break;
  if (equipo1.length <= equipo2.length) {
    equipo1.push(jugador);
  } else {
    equipo2.push(jugador);
  }
}


}


  
}

const FORMACIONES: { [key: number]: { defensas: number; medios: number; delanteros: number } } = {
  7: { defensas: 2, medios: 3, delanteros: 1 },
  8: { defensas: 2, medios: 3, delanteros: 2 },
  9: { defensas: 3, medios: 3, delanteros: 2 },
  10: { defensas: 4, medios: 3, delanteros: 2 },
  11: { defensas: 4, medios: 3, delanteros: 3 }
};
