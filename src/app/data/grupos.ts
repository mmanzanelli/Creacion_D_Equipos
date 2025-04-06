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
  
  // Grupo de prueba "demo"
  export const grupos: Grupo[] = [
    {
      nombre: 'demo',
      jugadores: []
    }
  ];
  