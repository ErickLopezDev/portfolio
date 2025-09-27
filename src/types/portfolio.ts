export interface IProject {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  rol: string;
  link: string;
  longDescription: string;
  fechaInicio: string; // formato: YYYY-MM-DD
  fechaFin: string; // formato: YYYY-MM-DD
  github: string;
  splash: string;
}
