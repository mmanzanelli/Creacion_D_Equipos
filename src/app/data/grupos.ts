export interface Jugador {
  nombre: string;
  apellido: string;
  disponible: boolean;
  puntuacionAtaque: number;
  puntuacionCreacion: number;
  puntuacionDefensa: number;
  puntuacionPortero: number;
}

export interface Grupo {
  nombre: string;
  jugadores: Jugador[];
}

export const grupos: Grupo[] = [
  {
    nombre: 'demo',
    jugadores: [
      { nombre: 'Ruben', apellido: 'Baraja', disponible: true, puntuacionAtaque: 70, puntuacionCreacion: 75, puntuacionDefensa: 80, puntuacionPortero: 0 },
      { nombre: 'Luis', apellido: 'Enrique', disponible: true, puntuacionAtaque: 85, puntuacionCreacion: 88, puntuacionDefensa: 72, puntuacionPortero: 0 },
      { nombre: 'Iker', apellido: 'Casillas', disponible: true, puntuacionAtaque: 20, puntuacionCreacion: 35, puntuacionDefensa: 60, puntuacionPortero: 95 },
      { nombre: 'Xavi', apellido: 'Hernandez', disponible: true, puntuacionAtaque: 75, puntuacionCreacion: 92, puntuacionDefensa: 68, puntuacionPortero: 0 },
      { nombre: 'Andres', apellido: 'Iniesta', disponible: true, puntuacionAtaque: 78, puntuacionCreacion: 94, puntuacionDefensa: 60, puntuacionPortero: 0 },
      { nombre: 'Sergio', apellido: 'Ramos', disponible: true, puntuacionAtaque: 70, puntuacionCreacion: 65, puntuacionDefensa: 90, puntuacionPortero: 0 },
      { nombre: 'Gerard', apellido: 'Piqué', disponible: true, puntuacionAtaque: 60, puntuacionCreacion: 60, puntuacionDefensa: 85, puntuacionPortero: 0 },
      { nombre: 'David', apellido: 'Villa', disponible: true, puntuacionAtaque: 88, puntuacionCreacion: 70, puntuacionDefensa: 55, puntuacionPortero: 0 },
      { nombre: 'Fernando', apellido: 'Torres', disponible: true, puntuacionAtaque: 85, puntuacionCreacion: 68, puntuacionDefensa: 50, puntuacionPortero: 0 },
      { nombre: 'Cesc', apellido: 'Fàbregas', disponible: true, puntuacionAtaque: 72, puntuacionCreacion: 85, puntuacionDefensa: 60, puntuacionPortero: 0 },
      { nombre: 'Carlos', apellido: 'Puyol', disponible: true, puntuacionAtaque: 55, puntuacionCreacion: 58, puntuacionDefensa: 92, puntuacionPortero: 0 },
      { nombre: 'Santi', apellido: 'Cazorla', disponible: true, puntuacionAtaque: 74, puntuacionCreacion: 80, puntuacionDefensa: 62, puntuacionPortero: 0 },
      { nombre: 'Juan', apellido: 'Mata', disponible: true, puntuacionAtaque: 76, puntuacionCreacion: 82, puntuacionDefensa: 60, puntuacionPortero: 0 },
      { nombre: 'Javi', apellido: 'Martínez', disponible: true, puntuacionAtaque: 65, puntuacionCreacion: 70, puntuacionDefensa: 78, puntuacionPortero: 0 },
      { nombre: 'Pepe', apellido: 'Reina', disponible: true, puntuacionAtaque: 20, puntuacionCreacion: 30, puntuacionDefensa: 50, puntuacionPortero: 88 },
      { nombre: 'Álvaro', apellido: 'Arbeloa', disponible: true, puntuacionAtaque: 50, puntuacionCreacion: 55, puntuacionDefensa: 70, puntuacionPortero: 0 }
    ]
  }
];
