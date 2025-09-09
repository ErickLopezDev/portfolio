export interface ICertificate {
  id: number;
  titulo: string;
  institucion: string;
  fecha: string;
  imagen: string;
  obtenido: boolean;
}

export interface IProject {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  rol: string;
  link: string;
  longDescription: string;
  fechaInicio: string; // formato: YYYY-MM-DD
  fechaFin: string;    // formato: YYYY-MM-DD
}


export interface IExperience {
  id: number;
  empresa: string;
  puesto: string;
  periodo: string;
  descripcion: string;
  highlights?: string[];
}
