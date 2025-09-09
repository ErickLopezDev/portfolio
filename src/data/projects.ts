import { type IProject } from "../types/portfolio";

import project1Img from "../assets/crellow.png";
import project2Img from "../assets/csrs.png";
import project3Img from "../assets/fitfat.png";

export const projects: IProject[] = [
  {
    id: 1,
    titulo: "Crellow",
    descripcion: "Clone de Trello",
    imagen: project1Img,
    tecnologias: ["React", "Express", "Typescript", "Tailwind", "PostgreSQL", "Prisma", "Vercel", "Railway"],
    rol: "Lead Developer",
    link: "#",
    longDescription:
      "Crellow es un clon de Trello diseñado como una aplicación de gestión de proyectos colaborativos. Implementé la posibilidad de crear tableros, listas y tarjetas, incluyendo la funcionalidad de invitación de usuarios a proyectos específicos. El objetivo fue practicar principios de arquitectura modular y el diseño de un backend escalable con Express y Prisma. Las rutas RESTful se construyeron siguiendo buenas prácticas de seguridad (validación de inputs, protección de endpoints) y el frontend en React + Tailwind priorizó la experiencia de usuario con un diseño responsivo. El despliegue en Vercel (frontend) y Railway (backend + base de datos PostgreSQL) me permitió simular un entorno real de CI/CD y manejar variables de entorno sensibles.",
    fechaInicio: "2025-01-01",
    fechaFin: "2025-03-01",
  },
  {
    id: 2,
    titulo: "Cajamarca Sobre Ruedas Store",
    descripcion: "Aplicación web de gestión de inventario para el negocio.",
    imagen: project2Img,
    tecnologias: [".NET 8", "HTML", "CSS", "Bootstrap", "SqlServer"],
    rol: "Backend Developer",
    link: "#",
    longDescription:
      "Este proyecto consistió en el desarrollo de un sistema de gestión de inventario para el negocio 'Cajamarca Sobre Ruedas'. Como backend developer, trabajé principalmente en la lógica de negocio y la integración con SQL Server. Implementé la autenticación y autorización de usuarios, creación de endpoints API seguros en .NET 8, y validaciones de datos para garantizar la integridad de la información de productos, ventas y reportes. El frontend se desarrolló con HTML, CSS y Bootstrap para ofrecer una interfaz sencilla pero funcional al usuario. Además, se implementó un módulo de reportes para visualizar el stock en tiempo real y facilitar la toma de decisiones. Este proyecto me permitió profundizar en el patrón MVC de ASP.NET, y en cómo conectar eficazmente controladores, modelos y vistas en un entorno de producción.",
    fechaInicio: "2025-02-10",
    fechaFin: "2025-04-20",
  },
  {
    id: 3,
    titulo: "FitFat - Cafetería",
    descripcion: "Dashboard interactivo con estadísticas de la viabilidad del negocio.",
    imagen: project3Img,
    tecnologias: ["Angular20", "Express", "Typescript", "Tailwind", "MongoDB", "Mongoose", "Vercel", "Railway"],
    rol: "DevOps Engineer",
    link: "#",
    longDescription:
      "FitFat es una aplicación orientada a la gestión de cafeterías, con un dashboard interactivo que muestra estadísticas clave sobre la viabilidad del negocio. El backend fue construido con Express y MongoDB (a través de Mongoose) para un manejo ágil de datos no estructurados. El frontend, desarrollado en Angular 20 y Tailwind, permite visualizar métricas como ventas, clientes frecuentes y productos más rentables. Mi rol se centró en el diseño e implementación de la infraestructura DevOps: contenedorización con Docker, despliegue continuo en Railway y Vercel, y configuración de entornos escalables para pruebas y producción. Además, trabajé en el monitoreo de logs y en la preparación de la app para soportar cargas más altas, garantizando disponibilidad y resiliencia. Este proyecto fue clave para afianzar mis habilidades en orquestación de servicios y prácticas modernas de DevOps aplicadas a proyectos reales.",
    fechaInicio: "2025-03-15",
    fechaFin: "2025-05-30",
  },
];
